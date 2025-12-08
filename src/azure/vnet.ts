import * as nat from '@cdktf/provider-azurerm/lib/nat-gateway';
import * as natIP from '@cdktf/provider-azurerm/lib/nat-gateway-public-ip-association';
import * as natAssoc from '@cdktf/provider-azurerm/lib/subnet-nat-gateway-association';
import * as azcdk from '@microsoft/terraform-cdk-constructs';
import { Construct } from 'constructs';
import { IpAddresses } from '../ip-addresses';

export enum SubnetType {
  /**
   * A private subnet with a NAT gateway for outbound internet access
   */
  PRIVATE_WITH_NAT = 'private_with_nat',

  /**
   * A private isolated subnet with no internet access
   */
  PRIVATE_ISOLATED = 'private_isolated',
}

export interface ISubnet extends azcdk.Subnet {
  readonly subnetType: SubnetType;
  readonly searchName: string;
}

export abstract class SubnetBase extends azcdk.Subnet implements ISubnet {
  public abstract readonly subnetType: SubnetType;
  public abstract readonly searchName: string;
}

export interface SubnetProps extends azcdk.SubnetProps {
  subnetType: SubnetType;
  searchName: string;
}

export class Subnet extends SubnetBase {
  readonly subnetType: SubnetType;
  public readonly searchName: string;

  constructor(scope: Construct, id: string, props: SubnetProps) {
    const { subnetType, searchName, ...rest } = props;
    super(scope, id, rest);
    this.subnetType = subnetType;
    this.searchName = searchName;
  }
}

export class PrivateIsolatedSubnet extends Subnet {
  constructor(scope: Construct, id: string, props: Omit<SubnetProps, 'subnetType'>) {
    super(scope, id, {
      ...props,
      subnetType: SubnetType.PRIVATE_ISOLATED,
    });
  }
}

export class PrivateWithNatSubnet extends Subnet {
  constructor(scope: Construct, id: string, props: Omit<SubnetProps, 'subnetType'>) {
    super(scope, id, {
      ...props,
      subnetType: SubnetType.PRIVATE_WITH_NAT,
    });
  }
}

export interface SubnetConfig
  extends Omit<
    azcdk.SubnetProps,
    'resourceGroupId' | 'virtualNetworkId' | 'virtualNetworkName' | 'addressPrefix'
  > {
  name: string;

  /**
   * The type of subnet to create
   *
   * @default SubnetType.PRIVATE_WITH_NAT
   */
  subnetType?: SubnetType;

  /**
   * The CIDR mask for the subnet
   *
   */
  cidrMask: number;
}

export interface SubnetSelection {
  /**
   * The type of subnet to select
   *
   * @default SubnetType.PRIVATE_WITH_NAT
   */
  subnetType?: SubnetType;

  /**
   * The name of the subnet to select
   *
   * @default - All subnets of the given type are selected
   */
  subnetName?: string;
}

export interface IVNet {
  /**
   * The ID of the Virtual Network
   *
   * @attribute
   */
  readonly vnetId: string;

  /**
   * The name of the Virtual Network
   *
   * @attribute
   */
  readonly vnetName: string;

  /**
   * The address space of the Virtual Network
   *
   * @attribute
   */
  readonly cidrBlock: IpAddresses;

  /**
   * List of isolated private subnets in this Virtual Network
   */
  readonly isolatedSubnets: ISubnet[];

  /**
   * List of private subnets in this Virtual Network
   */
  readonly privateSubnets: ISubnet[];

  selectSubnets(selection?: SubnetSelection): ISubnet[];
}

export abstract class VNetBase extends Construct implements IVNet {
  public abstract readonly vnetId: string;
  public abstract readonly vnetName: string;
  public abstract readonly cidrBlock: IpAddresses;
  public abstract readonly resourceGroup: azcdk.ResourceGroup;
  public abstract readonly isolatedSubnets: ISubnet[];
  public abstract readonly privateSubnets: ISubnet[];

  /**
   * Returns a list of subnets matching the given selection criteria
   */
  public selectSubnets(
    selection: SubnetSelection = { subnetType: SubnetType.PRIVATE_WITH_NAT },
  ): ISubnet[] {
    const subnets: ISubnet[] = [...this.privateSubnets, ...this.isolatedSubnets].filter(subnet => {
      if (selection.subnetType && subnet.subnetType !== selection.subnetType) {
        return false;
      }

      if (selection.subnetName && subnet.searchName !== selection.subnetName) {
        return false;
      }

      return true;
    });

    return subnets;
  }
}

export interface VNetProps {
  resourceGroup: azcdk.ResourceGroup;
  cidrBlock: IpAddresses;
  /**
   * Subnets to create within the Virtual Network
   *
   * @default - A single private subnet will be created
   */
  subnetConfig?: SubnetConfig[];
}

/**
 * Represents an Azure Virtual Network (VNet) with support for private and isolated subnets.
 *
 * This construct allows you to create a VNet with specified CIDR block and subnets, and will
 * handle ip addressing, NAT gateway setup, and subnet associations as needed.
 */
export class VNet extends VNetBase {
  readonly vnetId: string;
  readonly vnetName: string;
  readonly cidrBlock: IpAddresses;
  readonly resourceGroup: azcdk.ResourceGroup;
  readonly isolatedSubnets: ISubnet[] = [];
  readonly privateSubnets: ISubnet[] = [];

  private natGateway?: nat.NatGateway;

  constructor(scope: Construct, id: string, props: VNetProps) {
    super(scope, id);

    const vnet = new azcdk.VirtualNetwork(this, 'VirtualNetwork', {
      name: `${props.resourceGroup.name}vnet`,
      location: props.resourceGroup.location,
      resourceGroupId: props.resourceGroup.id,
      addressSpace: {
        addressPrefixes: [props.cidrBlock.toString()],
      },
    });

    this.vnetId = vnet.id;
    this.vnetName = vnet.name;
    this.cidrBlock = props.cidrBlock;
    this.resourceGroup = props.resourceGroup;

    this.createSubnets(props.subnetConfig);
  }

  public addSubnet(config: SubnetConfig): void {
    this.createSubnets([config]);
  }

  private createSubnets(subnetConfigs?: SubnetConfig[]): void {
    const addressPrefixes = this.cidrBlock.buildCapacity(
      subnetConfigs?.map(subnet => subnet.cidrMask) ?? [24],
    );

    subnetConfigs?.forEach(subnetDef => {
      let subnet: ISubnet;
      const { cidrMask: _m, ...subnetProps } = subnetDef;
      const addressPrefix = addressPrefixes.shift();

      if (!addressPrefix) {
        throw new Error(`Not enough address space to create subnet: ${subnetDef.name}`);
      }

      switch (subnetDef.subnetType) {
        case SubnetType.PRIVATE_ISOLATED:
          subnet = new PrivateIsolatedSubnet(
            this,
            `PrivateIsolatedSubnet${this.isolatedSubnets.length + 1}`,
            {
              ...subnetProps,
              name: `${this.vnetName}${subnetDef.name}`,
              searchName: subnetDef.name,
              resourceGroupId: this.resourceGroup.id,
              virtualNetworkId: this.vnetId,
              virtualNetworkName: this.vnetName,
              addressPrefix,
            },
          );

          this.isolatedSubnets.push(subnet);

          break;
        case SubnetType.PRIVATE_WITH_NAT:
          subnet = new PrivateWithNatSubnet(
            this,
            `PrivateWithNatSubnet${this.privateSubnets.length + 1}`,
            {
              ...subnetProps,
              name: `${this.vnetName}${subnetDef.name}`,
              searchName: subnetDef.name,
              resourceGroupId: this.resourceGroup.id,
              virtualNetworkId: this.vnetId,
              virtualNetworkName: this.vnetName,
              addressPrefix,
            },
          );

          new natAssoc.SubnetNatGatewayAssociation(
            this,
            `SubnetNatGatewayAssociation${this.privateSubnets.length + 1}`,
            {
              natGatewayId: this.getNatGateway().id,
              subnetId: subnet.id,
            },
          );

          break;
        default:
          throw new Error(`Unsupported subnet type: ${subnetDef.subnetType}`);
      }
    });
  }

  private getNatGateway(): nat.NatGateway {
    if (!this.natGateway) {
      const natGWPublicIP = new azcdk.PublicIPAddress(this, 'NATGatewayPublicIP', {
        name: `${this.resourceGroup.name}natgwpip`,
        location: this.resourceGroup.location,
        resourceGroupId: this.resourceGroup.id,
        publicIPAllocationMethod: 'Static',
        sku: { name: 'Standard' },
      });

      this.natGateway = new nat.NatGateway(this, 'NATGateway', {
        name: `${this.resourceGroup.name}natgw`,
        location: this.resourceGroup.location ?? 'eastus',
        resourceGroupName: this.resourceGroup.name,
        skuName: 'Standard',
      });

      new natIP.NatGatewayPublicIpAssociation(this, 'NATGatewayPublicIPAssociation', {
        natGatewayId: this.natGateway.id,
        publicIpAddressId: natGWPublicIP.id,
      });
    }

    return this.natGateway;
  }
}

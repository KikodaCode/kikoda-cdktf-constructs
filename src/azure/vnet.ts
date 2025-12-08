import * as nat from '@cdktf/provider-azurerm/lib/nat-gateway';
import * as natIP from '@cdktf/provider-azurerm/lib/nat-gateway-public-ip-association';
import * as ip from '@cdktf/provider-azurerm/lib/public-ip';
import * as rg from '@cdktf/provider-azurerm/lib/resource-group';
import * as rms from '@cdktf/provider-azurerm/lib/subnet';
import * as natAssoc from '@cdktf/provider-azurerm/lib/subnet-nat-gateway-association';
import * as network from '@cdktf/provider-azurerm/lib/virtual-network';
import * as cdktf from 'cdktf';
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

export interface ISubnet {
  id: string;
  name: string;
  readonly subnetType: SubnetType;
  readonly searchName: string;
}

export abstract class SubnetBase extends rms.Subnet implements ISubnet {
  public abstract readonly subnetType: SubnetType;
  public abstract readonly searchName: string;
}

export interface SubnetProps extends rms.SubnetConfig {
  readonly subnetType: SubnetType;
  readonly searchName: string;
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

export interface PrivateIsolatedSubnetProps extends rms.SubnetConfig {
  readonly searchName: string;
}

export class PrivateIsolatedSubnet extends Subnet {
  constructor(scope: Construct, id: string, props: PrivateIsolatedSubnetProps) {
    super(scope, id, {
      ...props,
      subnetType: SubnetType.PRIVATE_ISOLATED,
    });
  }
}

export interface PrivateWithNatSubnetProps extends rms.SubnetConfig {
  readonly searchName: string;
}

export class PrivateWithNatSubnet extends Subnet {
  constructor(scope: Construct, id: string, props: PrivateWithNatSubnetProps) {
    super(scope, id, {
      ...props,
      subnetType: SubnetType.PRIVATE_WITH_NAT,
    });
  }
}

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;

  /**
   * The type of subnet to create
   *
   * @default SubnetType.PRIVATE_WITH_NAT
   */
  readonly subnetType?: SubnetType;

  /**
   * The CIDR mask for the subnet
   *
   */
  readonly cidrMask: number;

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}
   */
  readonly defaultOutboundAccessEnabled?: boolean | cdktf.IResolvable;

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}
   *
   * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
   * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
   */
  readonly id?: string;

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}
   */
  readonly privateEndpointNetworkPolicies?: string;

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}
   */
  readonly privateLinkServiceNetworkPoliciesEnabled?: boolean | cdktf.IResolvable;

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}
   */
  readonly serviceEndpointPolicyIds?: string[];

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}
   */
  readonly serviceEndpoints?: string[];

  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}
   */
  readonly sharingScope?: string;

  /**
   * delegation block
   *
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#delegation Subnet#delegation}
   */
  readonly delegation?: rms.SubnetDelegation[] | cdktf.IResolvable;

  /**
   * ip_address_pool block
   *
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}
   */
  readonly ipAddressPool?: rms.SubnetIpAddressPool;

  /**
   * timeouts block
   *
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#timeouts Subnet#timeouts}
   */
  readonly timeouts?: rms.SubnetTimeouts;
}

export interface SubnetSelection {
  /**
   * The type of subnet to select
   *
   * @default SubnetType.PRIVATE_WITH_NAT
   */
  readonly subnetType?: SubnetType;

  /**
   * The name of the subnet to select
   *
   * @default - All subnets of the given type are selected
   */
  readonly subnetName?: string;
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
  public abstract readonly resourceGroup: rg.ResourceGroup;
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
  readonly resourceGroup: rg.ResourceGroup;
  readonly cidrBlock: IpAddresses;
  /**
   * Subnets to create within the Virtual Network
   *
   * @default - A single private subnet will be created
   */
  readonly subnetConfig?: SubnetConfig[];
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
  readonly resourceGroup: rg.ResourceGroup;
  readonly isolatedSubnets: ISubnet[] = [];
  readonly privateSubnets: ISubnet[] = [];

  private natGateway?: nat.NatGateway;

  constructor(scope: Construct, id: string, props: VNetProps) {
    super(scope, id);

    const vnet = new network.VirtualNetwork(this, 'VirtualNetwork', {
      name: `${props.resourceGroup.name}vnet`,
      location: props.resourceGroup.location,
      resourceGroupName: props.resourceGroup.name,
      addressSpace: [props.cidrBlock.toString()],
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
              resourceGroupName: this.resourceGroup.name,
              virtualNetworkName: this.vnetName,
              addressPrefixes: [addressPrefix],
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
              resourceGroupName: this.resourceGroup.name,
              virtualNetworkName: this.vnetName,
              addressPrefixes: [addressPrefix],
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
      const natGWPublicIP = new ip.PublicIp(this, 'NATGatewayPublicIP', {
        name: `${this.resourceGroup.name}natgwpip`,
        location: this.resourceGroup.location,
        resourceGroupName: this.resourceGroup.name,
        allocationMethod: 'Static',
        sku: 'Standard',
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

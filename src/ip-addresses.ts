/* eslint-disable no-bitwise */
export class IpAddresses {
  static cidr(cidrBlock: string): IpAddresses {
    return new IpAddresses(cidrBlock);
  }

  private static cidrRegex =
    /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/([0-9]|[1-2][0-9]|3[0-2])$/;

  private readonly baseIp: number;
  private readonly baseMask: number;

  private constructor(private readonly cidrBlock: string) {
    const match = IpAddresses.cidrRegex.exec(cidrBlock);

    if (!match) {
      throw new Error(`Invalid CIDR block: ${cidrBlock}`);
    }

    this.baseIp =
      (parseInt(match[1], 10) << 24) |
      (parseInt(match[2], 10) << 16) |
      (parseInt(match[3], 10) << 8) |
      parseInt(match[4], 10);

    this.baseMask = parseInt(match[5], 10);
  }

  /**
   * Builds subnets from the CIDR block based on the provided subnet masks.
   *
   * For each subnet mask in the input array, a subnet is created sequentially
   * from the base CIDR block. The method ensures that each subnet starts at
   * the correct boundary and does not overlap with previous subnets and stays
   * within the original CIDR block.
   */
  buildCapacity(subnetMasks: number[]): string[] {
    const subnets: string[] = [];
    let currentIp = this.baseIp;

    for (const mask of subnetMasks) {
      this.validateSubnetMask(mask);

      const subnetIp = this.alignToSubnetBoundary(currentIp, mask);
      subnets.push(this.subnetToCidr(subnetIp, mask));

      currentIp += this.subnetSize(mask);
    }

    return subnets;
  }

  private validateSubnetMask(mask: number): void {
    if (mask < this.baseMask || mask > 32) {
      throw new Error(`Invalid subnet mask: ${mask}`);
    }
  }

  /**
   * Aligns the given IP address to the subnet boundary defined by the mask.
   *
   * This is done by zeroing out the bits of the IP address that are
   * beyond the subnet mask.
   *
   * Example for a /24 mask:
   * IP: 11000000.10101000.00000001.00010101 (192.168.1.21)
   * Mask: 11111111.11111111.11111111.00000000 (/24)
   *
   * ip >> (32 - mask): 11000000.10101000.00000001.00000000
   *  << (32 - mask): 11000000.10101000.00000001.00000000
   * >>> 0: Ensures unsigned right shift
   *
   * Host bits (last 8 bits) are zeroed out:
   * Aligned IP: 11000000.10101000.00000001.00000000 (192.168.1.0)
   */
  private alignToSubnetBoundary(ip: number, mask: number): number {
    return ((ip >> (32 - mask)) << (32 - mask)) >>> 0;
  }

  /**
   * Converts a 32 bit integer IP address to its CIDR notation string.
   */
  private subnetToCidr(subnetIp: number, mask: number): string {
    // shift each 8-bit segment and mask with 0xff to get the octets
    const octet1 = (subnetIp >> 24) & 0xff;
    const octet2 = (subnetIp >> 16) & 0xff;
    const octet3 = (subnetIp >> 8) & 0xff;
    const octet4 = subnetIp & 0xff;

    return `${octet1}.${octet2}.${octet3}.${octet4}/${mask}`;
  }

  /**
   * Calculates the size of a subnet given its mask as a 32-bit integer.
   *
   * The size is determined by the number of host bits available,
   * which is (32 - mask).
   */
  private subnetSize(mask: number): number {
    return 1 << (32 - mask);
  }

  toString(): string {
    return this.cidrBlock;
  }
}

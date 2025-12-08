import { IpAddresses } from '../src';

describe('IpAddresses', () => {
  const ipAddresses = IpAddresses.cidr('10.0.0.0/16');

  it('should build capacity correctly', () => {
    const cidrs = ipAddresses.buildCapacity([23, 24, 28, 29]);

    expect(cidrs).toEqual(['10.0.0.0/23', '10.0.2.0/24', '10.0.3.0/28', '10.0.3.16/29']);
  });

  it('should throw error for invalid subnet mask', () => {
    expect(() => ipAddresses.buildCapacity([15])).toThrow('Invalid subnet mask: 15');
  });

  it('should throw error for invalid CIDR block', () => {
    expect(() => IpAddresses.cidr('10.0.0.0/33')).toThrow('Invalid CIDR block: 10.0.0.0/33');
  });

  it('should convert to string correctly', () => {
    expect(ipAddresses.toString()).toBe('10.0.0.0/16');
  });
});

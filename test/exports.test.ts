import * as kcdktf from '../src';

test('should export azure constructs as .azure', () => {
  expect(kcdktf.azure).toBeDefined();
  expect(kcdktf.azure.VNet).toBeDefined();
});

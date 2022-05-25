import { Testing } from 'cdktf';
import { ConfiguredStack } from '../src';

import 'cdktf/lib/testing/adapters/jest';

describe('Configured TerraformStack', () => {
  /**
   * TerraformStack must expose the custom type config.
   */
  test.each`
    bespokeConfig
    ${{ test: 1 }}
    ${{ test: 'yes' }}
    ${{ test: { nestedConfig: true } }}
  `('assigns $bespokeConfig to config', bespokeConfig => {
    const app = Testing.app();
    const stack = new ConfiguredStack<typeof bespokeConfig>(app, 'my-app', {
      stageName: 'test',
      config: bespokeConfig,
    });

    expect(stack.config).toStrictEqual(bespokeConfig);
    expect(Testing.fullSynth(stack)).toBeValidTerraform();
  });
});

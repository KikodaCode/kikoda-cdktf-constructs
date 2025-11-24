import { Testing } from 'cdktf';
import { Construct } from 'constructs/lib/construct';
import { ConfiguredStack, ConfiguredStackProps } from '../src';

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
    const stack = new ConfiguredStack<typeof bespokeConfig>(app, 'test', {
      stackName: 'test',
      config: bespokeConfig,
    });

    expect(stack.config).toStrictEqual(bespokeConfig);
    expect(Testing.fullSynth(stack)).toBeValidTerraform();
  });

  test('finds ConfiguredStack in a child construct', () => {
    interface Config {
      foo: string;
    }

    class ChildConstruct extends Construct {
      readonly configuredStack: ConfiguredStack<Config>;

      constructor(scope: Construct, id: string) {
        super(scope, id);

        // call this twice to test caching
        ConfiguredStack.extOf<Config>(this); // first call, uncached
        this.configuredStack = ConfiguredStack.extOf<Config>(this); // second call, cached, set to property
      }
    }

    class MyStack<T> extends ConfiguredStack<T> {
      readonly childConstruct: ChildConstruct;

      constructor(scope: Construct, id: string, props: ConfiguredStackProps<T>) {
        super(scope, id, props);

        this.childConstruct = new ChildConstruct(this, 'ChildConstruct');
      }
    }

    const stack = new MyStack(Testing.app(), 'MyStack', {
      stackName: 'test',
      config: { foo: 'bar' },
    });

    expect(stack.childConstruct.configuredStack.config.foo).toBe('bar');
  });

  test('throws if no ConfiguredStack can be found', () => {
    class OrphanConstruct extends Construct {
      constructor(scope: Construct, id: string) {
        super(scope, id);
      }
    }

    const app = Testing.app();
    const orphan = new OrphanConstruct(app, 'OrphanConstruct');

    expect(() => {
      ConfiguredStack.extOf<any>(orphan);
    }).toThrow();
  });
});

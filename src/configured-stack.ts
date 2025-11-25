import { App, TerraformStack } from 'cdktf';
import { Construct, IConstruct } from 'constructs';

const CONFIGURED_STACK_SYMBOL = Symbol.for('@kikoda/cdktf-constructs.ConfiguredStack');
const CONFIGURED_STACK_CACHE = Symbol.for('@kikoda/cdktf-constructs.ConfiguredStack.cache');

/**
 * Configured TerraformStack Properties.
 *
 * @export
 * @interface ConfiguredStackProps
 * @template T
 * @extends {StackProps}
 */
export interface ConfiguredStackProps<T> {
  readonly config: T;
}

/**
 * A TerraformStack that has a specific configuration.
 *
 * @export
 * @class ConfiguredStack
 * @template TConfig - a generic type that represents the configuration for the stage.
 * @extends {TerraformStack}
 */
export class ConfiguredStack<TConfig> extends TerraformStack {
  /**
   * Return the `ConfiguredStack` a construct is contained within, if available. This method is
   * most useful when you need to load the configuration in a nested construct. This works exactly
   * like TerraformStack.of() but returns a `ConfiguredStack` instead of a `TerraformStack`.
   *
   */
  public static extOf<K>(construct: IConstruct): ConfiguredStack<K> {
    const cache = (construct as any)[CONFIGURED_STACK_CACHE] as ConfiguredStack<K> | undefined;
    if (cache) {
      return cache;
    } else {
      const value = _lookup(construct);
      Object.defineProperty(construct, CONFIGURED_STACK_CACHE, {
        enumerable: false,
        writable: false,
        configurable: false,
        value,
      });

      return value;
    }

    function _lookup(c: IConstruct): ConfiguredStack<K> {
      if (ConfiguredStack.isConfiguredStack(c)) {
        return c;
      }

      const node = c.node;

      if (!node.scope) {
        let hint = '';
        if (construct.node.scope === c && App.isApp(c)) {
          // the scope of the originally passed construct equals the construct c
          // which has no scope (i.e. has no parent construct) and c is an App
          // and our construct is a Backend
          hint = `. You seem to have passed your root App as scope to a construct. Pass a stack (inheriting from TerraformStack) as scope to your construct instead.`;
        }

        throw new Error(
          `No ConfiguredStack could be identified for the construct at path '${construct.node.path}'${hint}`,
        );
      }

      return _lookup(node.scope);
    }
  }

  /**
   * Test whether the given construct is a ConfiguredStack.
   *
   */
  public static isConfiguredStack(x: any): x is ConfiguredStack<any> {
    return x !== null && typeof x === 'object' && CONFIGURED_STACK_SYMBOL in x;
  }

  /**
   * The stack name.
   *
   * @readonly
   */
  readonly stackName: string;

  /**
   * The configuration for the stage.
   *
   * @readonly
   */
  readonly config: TConfig;

  /**
   * Configured TerraformStack construct.
   * This construct allows for use of the specified generic type to be made available as the config property.
   *
   * @constructor
   * @param {Construct} scope - The scope of the construct.
   * @param {string} id - The construct's id.
   * @param {ConfiguredStackProps<TConfig>} props - The configuration based upon a generic type.
   */
  constructor(scope: Construct, id: string, props: ConfiguredStackProps<TConfig>) {
    super(scope, id);
    Object.defineProperty(this, CONFIGURED_STACK_SYMBOL, { value: true });
    this.stackName = id;
    this.config = props.config;
  }
}

import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';

/**
 * Configured TerraformStack Properties.
 *
 * @export
 * @interface ConfiguredStackProps
 * @typedef {ConfiguredStackProps}
 * @template T
 * @extends {StackProps}
 */
export interface ConfiguredStackProps<T> {
  readonly stageName: string;
  readonly config: T;
}

/**
 * A TerraformStack that has a specific configuration.
 *
 * @export
 * @class ConfiguredStack
 * @typedef {ConfiguredStack}
 * @template TConfig - a generic type that represents the configuration for the stage.
 * @extends {TerraformStack}
 */
export class ConfiguredStack<TConfig> extends TerraformStack {
  /**
   * The configuration for the stage.
   *
   * @readonly
   */
  readonly config: TConfig;

  /**
   * Configured TerraformStack construct to be used with the Deployment Piplelines construct.
   * This stage allows for use of the specified generic type to be made available as the config property.
   *
   * @constructor
   * @param {Construct} scope - The scope of the construct.
   * @param {string} id - The construct's id.
   * @param {ConfiguredStackProps<TConfig>} props - The configuration based upon a generic type.
   */
  constructor(scope: Construct, id: string, props: ConfiguredStackProps<TConfig>) {
    super(scope, id);
    this.config = props.config;
  }
}

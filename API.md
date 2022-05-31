# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfiguredStack <a name="ConfiguredStack" id="@kikoda/cdktf-constructs.ConfiguredStack"></a>

A TerraformStack that has a specific configuration.

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.ConfiguredStack.Initializer"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

new ConfiguredStack(scope: Construct, id: string, props: ConfiguredStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope of the construct. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct's id. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdktf-constructs.ConfiguredStackProps">ConfiguredStackProps</a></code> | - The configuration based upon a generic type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.id"></a>

- *Type:* string

The construct's id.

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdktf-constructs.ConfiguredStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdktf-constructs.ConfiguredStackProps">ConfiguredStackProps</a>

The configuration based upon a generic type.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.ConfiguredStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@kikoda/cdktf-constructs.ConfiguredStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@kikoda/cdktf-constructs.ConfiguredStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.ConfiguredStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="@kikoda/cdktf-constructs.ConfiguredStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `getLogicalId` <a name="getLogicalId" id="@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `toTerraform` <a name="toTerraform" id="@kikoda/cdktf-constructs.ConfiguredStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdktf-constructs.ConfiguredStack.isConstruct"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.ConfiguredStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@kikoda/cdktf-constructs.ConfiguredStack.isStack"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.ConfiguredStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@kikoda/cdktf-constructs.ConfiguredStack.of"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="@kikoda/cdktf-constructs.ConfiguredStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.config">config</a></code> | <code>any</code> | The configuration for the stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.ConfiguredStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@kikoda/cdktf-constructs.ConfiguredStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdktf-constructs.ConfiguredStack.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

The configuration for the stage.

---


## Structs <a name="Structs" id="Structs"></a>

### ConfiguredStackProps <a name="ConfiguredStackProps" id="@kikoda/cdktf-constructs.ConfiguredStackProps"></a>

Configured TerraformStack Properties.

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.ConfiguredStackProps.Initializer"></a>

```typescript
import { ConfiguredStackProps } from '@kikoda/cdktf-constructs'

const configuredStackProps: ConfiguredStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStackProps.property.config">config</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStackProps.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdktf-constructs.ConfiguredStackProps.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@kikoda/cdktf-constructs.ConfiguredStackProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---




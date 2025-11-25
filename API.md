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
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.ConfiguredStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@kikoda/cdktf-constructs.ConfiguredStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@kikoda/cdktf-constructs.ConfiguredStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

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

##### `dependsOn` <a name="dependsOn" id="@kikoda/cdktf-constructs.ConfiguredStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="@kikoda/cdktf-constructs.ConfiguredStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="@kikoda/cdktf-constructs.ConfiguredStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: Node | TerraformElement): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="@kikoda/cdktf-constructs.ConfiguredStack.getLogicalId.parameter.tfElement"></a>

- *Type:* constructs.Node | cdktf.TerraformElement

---

##### `hasResourceMove` <a name="hasResourceMove" id="@kikoda/cdktf-constructs.ConfiguredStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): boolean
```

##### `prepareStack` <a name="prepareStack" id="@kikoda/cdktf-constructs.ConfiguredStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="@kikoda/cdktf-constructs.ConfiguredStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="@kikoda/cdktf-constructs.ConfiguredStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="@kikoda/cdktf-constructs.ConfiguredStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@kikoda/cdktf-constructs.ConfiguredStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="@kikoda/cdktf-constructs.ConfiguredStack.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toHclTerraform` <a name="toHclTerraform" id="@kikoda/cdktf-constructs.ConfiguredStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): {[ key: string ]: any}
```

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
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.extOf">extOf</a></code> | Return the `ConfiguredStack` a construct is contained within, if available. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.isConfiguredStack">isConfiguredStack</a></code> | Test whether the given construct is a ConfiguredStack. |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.ConfiguredStack.isConstruct"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

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

##### `extOf` <a name="extOf" id="@kikoda/cdktf-constructs.ConfiguredStack.extOf"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.extOf(construct: IConstruct)
```

Return the `ConfiguredStack` a construct is contained within, if available.

This method is
most useful when you need to load the configuration in a nested construct. This works exactly
like TerraformStack.of() but returns a `ConfiguredStack` instead of a `TerraformStack`.

###### `construct`<sup>Required</sup> <a name="construct" id="@kikoda/cdktf-constructs.ConfiguredStack.extOf.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isConfiguredStack` <a name="isConfiguredStack" id="@kikoda/cdktf-constructs.ConfiguredStack.isConfiguredStack"></a>

```typescript
import { ConfiguredStack } from '@kikoda/cdktf-constructs'

ConfiguredStack.isConfiguredStack(x: any)
```

Test whether the given construct is a ConfiguredStack.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.ConfiguredStack.isConfiguredStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.moveTargets">moveTargets</a></code> | <code>cdktf.TerraformResourceTargets</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.config">config</a></code> | <code>any</code> | The configuration for the stage. |
| <code><a href="#@kikoda/cdktf-constructs.ConfiguredStack.property.stackName">stackName</a></code> | <code>string</code> | The stack name. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.ConfiguredStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@kikoda/cdktf-constructs.ConfiguredStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `moveTargets`<sup>Required</sup> <a name="moveTargets" id="@kikoda/cdktf-constructs.ConfiguredStack.property.moveTargets"></a>

```typescript
public readonly moveTargets: TerraformResourceTargets;
```

- *Type:* cdktf.TerraformResourceTargets

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="@kikoda/cdktf-constructs.ConfiguredStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The stack name.

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

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdktf-constructs.ConfiguredStackProps.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

---




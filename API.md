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


### PrivateIsolatedSubnet <a name="PrivateIsolatedSubnet" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet"></a>

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.PrivateIsolatedSubnet(scope: Construct, id: string, props: PrivateIsolatedSubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.props">props</a></code> | <code>@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.Initializer.parameter.props"></a>

- *Type:* @kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putIpAddressPool">putIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetDefaultOutboundAccessEnabled">resetDefaultOutboundAccessEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetIpAddressPool">resetIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetPrivateEndpointNetworkPolicies">resetPrivateEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetPrivateLinkServiceNetworkPoliciesEnabled">resetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetServiceEndpointPolicyIds">resetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetServiceEndpoints">resetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetSharingScope">resetSharingScope</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDelegation` <a name="putDelegation" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putDelegation"></a>

```typescript
public putDelegation(value: IResolvable | SubnetDelegation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putDelegation.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `putIpAddressPool` <a name="putIpAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putIpAddressPool"></a>

```typescript
public putIpAddressPool(value: SubnetIpAddressPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putIpAddressPool.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `putTimeouts` <a name="putTimeouts" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetAddressPrefixes"></a>

```typescript
public resetAddressPrefixes(): void
```

##### `resetDefaultOutboundAccessEnabled` <a name="resetDefaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetDefaultOutboundAccessEnabled"></a>

```typescript
public resetDefaultOutboundAccessEnabled(): void
```

##### `resetDelegation` <a name="resetDelegation" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetId` <a name="resetId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressPool` <a name="resetIpAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetIpAddressPool"></a>

```typescript
public resetIpAddressPool(): void
```

##### `resetPrivateEndpointNetworkPolicies` <a name="resetPrivateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetPrivateEndpointNetworkPolicies"></a>

```typescript
public resetPrivateEndpointNetworkPolicies(): void
```

##### `resetPrivateLinkServiceNetworkPoliciesEnabled` <a name="resetPrivateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateLinkServiceNetworkPoliciesEnabled(): void
```

##### `resetServiceEndpointPolicyIds` <a name="resetServiceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetServiceEndpointPolicyIds"></a>

```typescript
public resetServiceEndpointPolicyIds(): void
```

##### `resetServiceEndpoints` <a name="resetServiceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetServiceEndpoints"></a>

```typescript
public resetServiceEndpoints(): void
```

##### `resetSharingScope` <a name="resetSharingScope" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetSharingScope"></a>

```typescript
public resetSharingScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateIsolatedSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformElement"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateIsolatedSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformResource"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateIsolatedSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateIsolatedSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.delegation">delegation</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetDelegationList</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.defaultOutboundAccessEnabledInput">defaultOutboundAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.delegationInput">delegationInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.ipAddressPoolInput">ipAddressPoolInput</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateEndpointNetworkPoliciesInput">privateEndpointNetworkPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateLinkServiceNetworkPoliciesEnabledInput">privateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointPolicyIdsInput">serviceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointsInput">serviceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.sharingScopeInput">sharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.sharingScope">sharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.delegation"></a>

```typescript
public readonly delegation: SubnetDelegationList;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetDelegationList

---

##### `ipAddressPool`<sup>Required</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPoolOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabledInput`<sup>Optional</sup> <a name="defaultOutboundAccessEnabledInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.defaultOutboundAccessEnabledInput"></a>

```typescript
public readonly defaultOutboundAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.delegationInput"></a>

```typescript
public readonly delegationInput: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressPoolInput`<sup>Optional</sup> <a name="ipAddressPoolInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.ipAddressPoolInput"></a>

```typescript
public readonly ipAddressPoolInput: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateEndpointNetworkPoliciesInput"></a>

```typescript
public readonly privateEndpointNetworkPoliciesInput: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabledInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="serviceEndpointPolicyIdsInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointPolicyIdsInput"></a>

```typescript
public readonly serviceEndpointPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceEndpointsInput`<sup>Optional</sup> <a name="serviceEndpointsInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointsInput"></a>

```typescript
public readonly serviceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `sharingScopeInput`<sup>Optional</sup> <a name="sharingScopeInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.sharingScopeInput"></a>

```typescript
public readonly sharingScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabled`<sup>Required</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPolicies`<sup>Required</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIds`<sup>Required</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

---

##### `serviceEndpoints`<sup>Required</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

---

##### `sharingScope`<sup>Required</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### PrivateWithNatSubnet <a name="PrivateWithNatSubnet" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet"></a>

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.PrivateWithNatSubnet(scope: Construct, id: string, props: PrivateWithNatSubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.props">props</a></code> | <code>@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.Initializer.parameter.props"></a>

- *Type:* @kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putIpAddressPool">putIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetDefaultOutboundAccessEnabled">resetDefaultOutboundAccessEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetIpAddressPool">resetIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetPrivateEndpointNetworkPolicies">resetPrivateEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetPrivateLinkServiceNetworkPoliciesEnabled">resetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetServiceEndpointPolicyIds">resetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetServiceEndpoints">resetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetSharingScope">resetSharingScope</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDelegation` <a name="putDelegation" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putDelegation"></a>

```typescript
public putDelegation(value: IResolvable | SubnetDelegation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putDelegation.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `putIpAddressPool` <a name="putIpAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putIpAddressPool"></a>

```typescript
public putIpAddressPool(value: SubnetIpAddressPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putIpAddressPool.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `putTimeouts` <a name="putTimeouts" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetAddressPrefixes"></a>

```typescript
public resetAddressPrefixes(): void
```

##### `resetDefaultOutboundAccessEnabled` <a name="resetDefaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetDefaultOutboundAccessEnabled"></a>

```typescript
public resetDefaultOutboundAccessEnabled(): void
```

##### `resetDelegation` <a name="resetDelegation" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetId` <a name="resetId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressPool` <a name="resetIpAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetIpAddressPool"></a>

```typescript
public resetIpAddressPool(): void
```

##### `resetPrivateEndpointNetworkPolicies` <a name="resetPrivateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetPrivateEndpointNetworkPolicies"></a>

```typescript
public resetPrivateEndpointNetworkPolicies(): void
```

##### `resetPrivateLinkServiceNetworkPoliciesEnabled` <a name="resetPrivateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateLinkServiceNetworkPoliciesEnabled(): void
```

##### `resetServiceEndpointPolicyIds` <a name="resetServiceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetServiceEndpointPolicyIds"></a>

```typescript
public resetServiceEndpointPolicyIds(): void
```

##### `resetServiceEndpoints` <a name="resetServiceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetServiceEndpoints"></a>

```typescript
public resetServiceEndpoints(): void
```

##### `resetSharingScope` <a name="resetSharingScope" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetSharingScope"></a>

```typescript
public resetSharingScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateWithNatSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformElement"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateWithNatSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformResource"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateWithNatSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.PrivateWithNatSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.delegation">delegation</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetDelegationList</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.defaultOutboundAccessEnabledInput">defaultOutboundAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.delegationInput">delegationInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.ipAddressPoolInput">ipAddressPoolInput</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateEndpointNetworkPoliciesInput">privateEndpointNetworkPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateLinkServiceNetworkPoliciesEnabledInput">privateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointPolicyIdsInput">serviceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointsInput">serviceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.sharingScopeInput">sharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.sharingScope">sharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.delegation"></a>

```typescript
public readonly delegation: SubnetDelegationList;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetDelegationList

---

##### `ipAddressPool`<sup>Required</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPoolOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabledInput`<sup>Optional</sup> <a name="defaultOutboundAccessEnabledInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.defaultOutboundAccessEnabledInput"></a>

```typescript
public readonly defaultOutboundAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.delegationInput"></a>

```typescript
public readonly delegationInput: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressPoolInput`<sup>Optional</sup> <a name="ipAddressPoolInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.ipAddressPoolInput"></a>

```typescript
public readonly ipAddressPoolInput: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateEndpointNetworkPoliciesInput"></a>

```typescript
public readonly privateEndpointNetworkPoliciesInput: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabledInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="serviceEndpointPolicyIdsInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointPolicyIdsInput"></a>

```typescript
public readonly serviceEndpointPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceEndpointsInput`<sup>Optional</sup> <a name="serviceEndpointsInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointsInput"></a>

```typescript
public readonly serviceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `sharingScopeInput`<sup>Optional</sup> <a name="sharingScopeInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.sharingScopeInput"></a>

```typescript
public readonly sharingScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabled`<sup>Required</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPolicies`<sup>Required</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIds`<sup>Required</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

---

##### `serviceEndpoints`<sup>Required</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

---

##### `sharingScope`<sup>Required</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Subnet <a name="Subnet" id="@kikoda/cdktf-constructs.azure.Subnet"></a>

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.Subnet.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.Subnet(scope: Construct, id: string, props: SubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.props">props</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdktf-constructs.azure.Subnet.Initializer.parameter.props"></a>

- *Type:* @kikoda/cdktf-constructs.azure.SubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.putIpAddressPool">putIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetDefaultOutboundAccessEnabled">resetDefaultOutboundAccessEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetIpAddressPool">resetIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetPrivateEndpointNetworkPolicies">resetPrivateEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled">resetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetServiceEndpointPolicyIds">resetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetServiceEndpoints">resetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetSharingScope">resetSharingScope</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.Subnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@kikoda/cdktf-constructs.azure.Subnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@kikoda/cdktf-constructs.azure.Subnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.Subnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@kikoda/cdktf-constructs.azure.Subnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@kikoda/cdktf-constructs.azure.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@kikoda/cdktf-constructs.azure.Subnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@kikoda/cdktf-constructs.azure.Subnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@kikoda/cdktf-constructs.azure.Subnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@kikoda/cdktf-constructs.azure.Subnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@kikoda/cdktf-constructs.azure.Subnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@kikoda/cdktf-constructs.azure.Subnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@kikoda/cdktf-constructs.azure.Subnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.Subnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.Subnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@kikoda/cdktf-constructs.azure.Subnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.Subnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@kikoda/cdktf-constructs.azure.Subnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@kikoda/cdktf-constructs.azure.Subnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@kikoda/cdktf-constructs.azure.Subnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.Subnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDelegation` <a name="putDelegation" id="@kikoda/cdktf-constructs.azure.Subnet.putDelegation"></a>

```typescript
public putDelegation(value: IResolvable | SubnetDelegation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.Subnet.putDelegation.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `putIpAddressPool` <a name="putIpAddressPool" id="@kikoda/cdktf-constructs.azure.Subnet.putIpAddressPool"></a>

```typescript
public putIpAddressPool(value: SubnetIpAddressPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.Subnet.putIpAddressPool.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `putTimeouts` <a name="putTimeouts" id="@kikoda/cdktf-constructs.azure.Subnet.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.Subnet.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@kikoda/cdktf-constructs.azure.Subnet.resetAddressPrefixes"></a>

```typescript
public resetAddressPrefixes(): void
```

##### `resetDefaultOutboundAccessEnabled` <a name="resetDefaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.Subnet.resetDefaultOutboundAccessEnabled"></a>

```typescript
public resetDefaultOutboundAccessEnabled(): void
```

##### `resetDelegation` <a name="resetDelegation" id="@kikoda/cdktf-constructs.azure.Subnet.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetId` <a name="resetId" id="@kikoda/cdktf-constructs.azure.Subnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressPool` <a name="resetIpAddressPool" id="@kikoda/cdktf-constructs.azure.Subnet.resetIpAddressPool"></a>

```typescript
public resetIpAddressPool(): void
```

##### `resetPrivateEndpointNetworkPolicies` <a name="resetPrivateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.Subnet.resetPrivateEndpointNetworkPolicies"></a>

```typescript
public resetPrivateEndpointNetworkPolicies(): void
```

##### `resetPrivateLinkServiceNetworkPoliciesEnabled` <a name="resetPrivateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateLinkServiceNetworkPoliciesEnabled(): void
```

##### `resetServiceEndpointPolicyIds` <a name="resetServiceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.Subnet.resetServiceEndpointPolicyIds"></a>

```typescript
public resetServiceEndpointPolicyIds(): void
```

##### `resetServiceEndpoints` <a name="resetServiceEndpoints" id="@kikoda/cdktf-constructs.azure.Subnet.resetServiceEndpoints"></a>

```typescript
public resetServiceEndpoints(): void
```

##### `resetSharingScope` <a name="resetSharingScope" id="@kikoda/cdktf-constructs.azure.Subnet.resetSharingScope"></a>

```typescript
public resetSharingScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@kikoda/cdktf-constructs.azure.Subnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.Subnet.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.Subnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.Subnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@kikoda/cdktf-constructs.azure.Subnet.isTerraformElement"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.Subnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@kikoda/cdktf-constructs.azure.Subnet.isTerraformResource"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.Subnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.Subnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.delegation">delegation</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetDelegationList</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.defaultOutboundAccessEnabledInput">defaultOutboundAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.delegationInput">delegationInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.ipAddressPoolInput">ipAddressPoolInput</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.privateEndpointNetworkPoliciesInput">privateEndpointNetworkPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput">privateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointPolicyIdsInput">serviceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointsInput">serviceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.sharingScopeInput">sharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.sharingScope">sharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.Subnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@kikoda/cdktf-constructs.azure.Subnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@kikoda/cdktf-constructs.azure.Subnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@kikoda/cdktf-constructs.azure.Subnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@kikoda/cdktf-constructs.azure.Subnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@kikoda/cdktf-constructs.azure.Subnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@kikoda/cdktf-constructs.azure.Subnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.Subnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.Subnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.Subnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.Subnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.Subnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.Subnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.Subnet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.Subnet.property.delegation"></a>

```typescript
public readonly delegation: SubnetDelegationList;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetDelegationList

---

##### `ipAddressPool`<sup>Required</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.Subnet.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPoolOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.Subnet.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabledInput`<sup>Optional</sup> <a name="defaultOutboundAccessEnabledInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.defaultOutboundAccessEnabledInput"></a>

```typescript
public readonly defaultOutboundAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.delegationInput"></a>

```typescript
public readonly delegationInput: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressPoolInput`<sup>Optional</sup> <a name="ipAddressPoolInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.ipAddressPoolInput"></a>

```typescript
public readonly ipAddressPoolInput: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.privateEndpointNetworkPoliciesInput"></a>

```typescript
public readonly privateEndpointNetworkPoliciesInput: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabledInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="serviceEndpointPolicyIdsInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointPolicyIdsInput"></a>

```typescript
public readonly serviceEndpointPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceEndpointsInput`<sup>Optional</sup> <a name="serviceEndpointsInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointsInput"></a>

```typescript
public readonly serviceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `sharingScopeInput`<sup>Optional</sup> <a name="sharingScopeInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.sharingScopeInput"></a>

```typescript
public readonly sharingScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@kikoda/cdktf-constructs.azure.Subnet.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.Subnet.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabled`<sup>Required</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.Subnet.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.Subnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.Subnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPolicies`<sup>Required</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.Subnet.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.Subnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.Subnet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIds`<sup>Required</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

---

##### `serviceEndpoints`<sup>Required</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.Subnet.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

---

##### `sharingScope`<sup>Required</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.Subnet.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.Subnet.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.Subnet.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.Subnet.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.Subnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@kikoda/cdktf-constructs.azure.Subnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### SubnetBase <a name="SubnetBase" id="@kikoda/cdktf-constructs.azure.SubnetBase"></a>

- *Implements:* @kikoda/cdktf-constructs.azure.ISubnet

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.SubnetBase.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.SubnetBase(scope: Construct, id: string, config: SubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdktf-constructs.azure.SubnetBase.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.putIpAddressPool">putIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetDefaultOutboundAccessEnabled">resetDefaultOutboundAccessEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetIpAddressPool">resetIpAddressPool</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetPrivateEndpointNetworkPolicies">resetPrivateEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetPrivateLinkServiceNetworkPoliciesEnabled">resetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetServiceEndpointPolicyIds">resetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetServiceEndpoints">resetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetSharingScope">resetSharingScope</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.SubnetBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@kikoda/cdktf-constructs.azure.SubnetBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@kikoda/cdktf-constructs.azure.SubnetBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.SubnetBase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@kikoda/cdktf-constructs.azure.SubnetBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@kikoda/cdktf-constructs.azure.SubnetBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@kikoda/cdktf-constructs.azure.SubnetBase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@kikoda/cdktf-constructs.azure.SubnetBase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@kikoda/cdktf-constructs.azure.SubnetBase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@kikoda/cdktf-constructs.azure.SubnetBase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.SubnetBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@kikoda/cdktf-constructs.azure.SubnetBase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@kikoda/cdktf-constructs.azure.SubnetBase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetBase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.SubnetBase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@kikoda/cdktf-constructs.azure.SubnetBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetBase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDelegation` <a name="putDelegation" id="@kikoda/cdktf-constructs.azure.SubnetBase.putDelegation"></a>

```typescript
public putDelegation(value: IResolvable | SubnetDelegation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.SubnetBase.putDelegation.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `putIpAddressPool` <a name="putIpAddressPool" id="@kikoda/cdktf-constructs.azure.SubnetBase.putIpAddressPool"></a>

```typescript
public putIpAddressPool(value: SubnetIpAddressPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.SubnetBase.putIpAddressPool.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `putTimeouts` <a name="putTimeouts" id="@kikoda/cdktf-constructs.azure.SubnetBase.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdktf-constructs.azure.SubnetBase.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetAddressPrefixes"></a>

```typescript
public resetAddressPrefixes(): void
```

##### `resetDefaultOutboundAccessEnabled` <a name="resetDefaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetDefaultOutboundAccessEnabled"></a>

```typescript
public resetDefaultOutboundAccessEnabled(): void
```

##### `resetDelegation` <a name="resetDelegation" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetDelegation"></a>

```typescript
public resetDelegation(): void
```

##### `resetId` <a name="resetId" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressPool` <a name="resetIpAddressPool" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetIpAddressPool"></a>

```typescript
public resetIpAddressPool(): void
```

##### `resetPrivateEndpointNetworkPolicies` <a name="resetPrivateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetPrivateEndpointNetworkPolicies"></a>

```typescript
public resetPrivateEndpointNetworkPolicies(): void
```

##### `resetPrivateLinkServiceNetworkPoliciesEnabled` <a name="resetPrivateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public resetPrivateLinkServiceNetworkPoliciesEnabled(): void
```

##### `resetServiceEndpointPolicyIds` <a name="resetServiceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetServiceEndpointPolicyIds"></a>

```typescript
public resetServiceEndpointPolicyIds(): void
```

##### `resetServiceEndpoints` <a name="resetServiceEndpoints" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetServiceEndpoints"></a>

```typescript
public resetServiceEndpoints(): void
```

##### `resetSharingScope` <a name="resetSharingScope" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetSharingScope"></a>

```typescript
public resetSharingScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@kikoda/cdktf-constructs.azure.SubnetBase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.SubnetBase.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.SubnetBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.SubnetBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformElement"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.SubnetBase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformResource"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.SubnetBase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.SubnetBase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.SubnetBase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.SubnetBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.delegation">delegation</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetDelegationList</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.defaultOutboundAccessEnabledInput">defaultOutboundAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.delegationInput">delegationInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.ipAddressPoolInput">ipAddressPoolInput</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.privateEndpointNetworkPoliciesInput">privateEndpointNetworkPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.privateLinkServiceNetworkPoliciesEnabledInput">privateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointPolicyIdsInput">serviceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointsInput">serviceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.sharingScopeInput">sharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.sharingScope">sharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.delegation"></a>

```typescript
public readonly delegation: SubnetDelegationList;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetDelegationList

---

##### `ipAddressPool`<sup>Required</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPoolOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPoolOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabledInput`<sup>Optional</sup> <a name="defaultOutboundAccessEnabledInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.defaultOutboundAccessEnabledInput"></a>

```typescript
public readonly defaultOutboundAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.delegationInput"></a>

```typescript
public readonly delegationInput: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressPoolInput`<sup>Optional</sup> <a name="ipAddressPoolInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.ipAddressPoolInput"></a>

```typescript
public readonly ipAddressPoolInput: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="privateEndpointNetworkPoliciesInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.privateEndpointNetworkPoliciesInput"></a>

```typescript
public readonly privateEndpointNetworkPoliciesInput: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabledInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="serviceEndpointPolicyIdsInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointPolicyIdsInput"></a>

```typescript
public readonly serviceEndpointPolicyIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceEndpointsInput`<sup>Optional</sup> <a name="serviceEndpointsInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointsInput"></a>

```typescript
public readonly serviceEndpointsInput: string[];
```

- *Type:* string[]

---

##### `sharingScopeInput`<sup>Optional</sup> <a name="sharingScopeInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.sharingScopeInput"></a>

```typescript
public readonly sharingScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetTimeouts

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `defaultOutboundAccessEnabled`<sup>Required</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointNetworkPolicies`<sup>Required</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceEndpointPolicyIds`<sup>Required</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

---

##### `serviceEndpoints`<sup>Required</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

---

##### `sharingScope`<sup>Required</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetBase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@kikoda/cdktf-constructs.azure.SubnetBase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### VNet <a name="VNet" id="@kikoda/cdktf-constructs.azure.VNet"></a>

Represents an Azure Virtual Network (VNet) with support for private and isolated subnets.

This construct allows you to create a VNet with specified CIDR block and subnets, and will
handle ip addressing, NAT gateway setup, and subnet associations as needed.

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.VNet.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.VNet(scope: Construct, id: string, props: VNetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.props">props</a></code> | <code>@kikoda/cdktf-constructs.azure.VNetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdktf-constructs.azure.VNet.Initializer.parameter.props"></a>

- *Type:* @kikoda/cdktf-constructs.azure.VNetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.selectSubnets">selectSubnets</a></code> | Returns a list of subnets matching the given selection criteria. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.addSubnet">addSubnet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.VNet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `selectSubnets` <a name="selectSubnets" id="@kikoda/cdktf-constructs.azure.VNet.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): ISubnet[]
```

Returns a list of subnets matching the given selection criteria.

###### `selection`<sup>Optional</sup> <a name="selection" id="@kikoda/cdktf-constructs.azure.VNet.selectSubnets.parameter.selection"></a>

- *Type:* @kikoda/cdktf-constructs.azure.SubnetSelection

---

##### `addSubnet` <a name="addSubnet" id="@kikoda/cdktf-constructs.azure.VNet.addSubnet"></a>

```typescript
public addSubnet(config: SubnetConfig): void
```

###### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdktf-constructs.azure.VNet.addSubnet.parameter.config"></a>

- *Type:* @kikoda/cdktf-constructs.azure.SubnetConfig

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.VNet.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.VNet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.VNet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.cidrBlock">cidrBlock</a></code> | <code><a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a></code> | The address space of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.isolatedSubnets">isolatedSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of isolated private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.privateSubnets">privateSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.resourceGroup">resourceGroup</a></code> | <code>@cdktf/provider-azurerm.resourceGroup.ResourceGroup</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.vnetId">vnetId</a></code> | <code>string</code> | The ID of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNet.property.vnetName">vnetName</a></code> | <code>string</code> | The name of the Virtual Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.VNet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@kikoda/cdktf-constructs.azure.VNet.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: IpAddresses;
```

- *Type:* <a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a>

The address space of the Virtual Network.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@kikoda/cdktf-constructs.azure.VNet.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of isolated private subnets in this Virtual Network.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="@kikoda/cdktf-constructs.azure.VNet.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of private subnets in this Virtual Network.

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@kikoda/cdktf-constructs.azure.VNet.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: ResourceGroup;
```

- *Type:* @cdktf/provider-azurerm.resourceGroup.ResourceGroup

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@kikoda/cdktf-constructs.azure.VNet.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

The ID of the Virtual Network.

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@kikoda/cdktf-constructs.azure.VNet.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

The name of the Virtual Network.

---


### VNetBase <a name="VNetBase" id="@kikoda/cdktf-constructs.azure.VNetBase"></a>

- *Implements:* @kikoda/cdktf-constructs.azure.IVNet

#### Initializers <a name="Initializers" id="@kikoda/cdktf-constructs.azure.VNetBase.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

new azure.VNetBase(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdktf-constructs.azure.VNetBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.VNetBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings. If
the ID includes a path separator (`/`), then it will be replaced by double
dash `--`.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.selectSubnets">selectSubnets</a></code> | Returns a list of subnets matching the given selection criteria. |

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.azure.VNetBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `selectSubnets` <a name="selectSubnets" id="@kikoda/cdktf-constructs.azure.VNetBase.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): ISubnet[]
```

Returns a list of subnets matching the given selection criteria.

###### `selection`<sup>Optional</sup> <a name="selection" id="@kikoda/cdktf-constructs.azure.VNetBase.selectSubnets.parameter.selection"></a>

- *Type:* @kikoda/cdktf-constructs.azure.SubnetSelection

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@kikoda/cdktf-constructs.azure.VNetBase.isConstruct"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

azure.VNetBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdktf-constructs.azure.VNetBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.cidrBlock">cidrBlock</a></code> | <code><a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a></code> | The address space of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.isolatedSubnets">isolatedSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of isolated private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.privateSubnets">privateSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.resourceGroup">resourceGroup</a></code> | <code>@cdktf/provider-azurerm.resourceGroup.ResourceGroup</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.vnetId">vnetId</a></code> | <code>string</code> | The ID of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetBase.property.vnetName">vnetName</a></code> | <code>string</code> | The name of the Virtual Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdktf-constructs.azure.VNetBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@kikoda/cdktf-constructs.azure.VNetBase.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: IpAddresses;
```

- *Type:* <a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a>

The address space of the Virtual Network.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@kikoda/cdktf-constructs.azure.VNetBase.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of isolated private subnets in this Virtual Network.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="@kikoda/cdktf-constructs.azure.VNetBase.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of private subnets in this Virtual Network.

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@kikoda/cdktf-constructs.azure.VNetBase.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: ResourceGroup;
```

- *Type:* @cdktf/provider-azurerm.resourceGroup.ResourceGroup

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@kikoda/cdktf-constructs.azure.VNetBase.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

The ID of the Virtual Network.

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@kikoda/cdktf-constructs.azure.VNetBase.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

The name of the Virtual Network.

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

### PrivateIsolatedSubnetProps <a name="PrivateIsolatedSubnetProps" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const privateIsolatedSubnetProps: azure.PrivateIsolatedSubnetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.delegation">delegation</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | delegation block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | ip_address_pool block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.sharingScope">sharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | timeouts block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `defaultOutboundAccessEnabled`<sup>Optional</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.delegation"></a>

```typescript
public readonly delegation: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressPool`<sup>Optional</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `privateEndpointNetworkPolicies`<sup>Optional</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `serviceEndpointPolicyIds`<sup>Optional</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `serviceEndpoints`<sup>Optional</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `sharingScope`<sup>Optional</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeouts;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.PrivateIsolatedSubnetProps.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

### PrivateWithNatSubnetProps <a name="PrivateWithNatSubnetProps" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const privateWithNatSubnetProps: azure.PrivateWithNatSubnetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.delegation">delegation</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | delegation block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | ip_address_pool block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.sharingScope">sharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | timeouts block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `defaultOutboundAccessEnabled`<sup>Optional</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.delegation"></a>

```typescript
public readonly delegation: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressPool`<sup>Optional</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `privateEndpointNetworkPolicies`<sup>Optional</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `serviceEndpointPolicyIds`<sup>Optional</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `serviceEndpoints`<sup>Optional</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `sharingScope`<sup>Optional</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeouts;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.PrivateWithNatSubnetProps.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

### SubnetConfig <a name="SubnetConfig" id="@kikoda/cdktf-constructs.azure.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.SubnetConfig.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const subnetConfig: azure.SubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.cidrMask">cidrMask</a></code> | <code>number</code> | The CIDR mask for the subnet. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.delegation">delegation</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | delegation block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | ip_address_pool block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.sharingScope">sharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | The type of subnet to create. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrMask`<sup>Required</sup> <a name="cidrMask" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number

The CIDR mask for the subnet.

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `defaultOutboundAccessEnabled`<sup>Optional</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.delegation"></a>

```typescript
public readonly delegation: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressPool`<sup>Optional</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `privateEndpointNetworkPolicies`<sup>Optional</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `serviceEndpointPolicyIds`<sup>Optional</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `serviceEndpoints`<sup>Optional</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `sharingScope`<sup>Optional</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `subnetType`<sup>Optional</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType
- *Default:* SubnetType.PRIVATE_WITH_NAT

The type of subnet to create.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.SubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeouts;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

### SubnetProps <a name="SubnetProps" id="@kikoda/cdktf-constructs.azure.SubnetProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.SubnetProps.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const subnetProps: azure.SubnetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.defaultOutboundAccessEnabled">defaultOutboundAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.delegation">delegation</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.subnet.SubnetDelegation[]</code> | delegation block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.ipAddressPool">ipAddressPool</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetIpAddressPool</code> | ip_address_pool block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.privateEndpointNetworkPolicies">privateEndpointNetworkPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.privateLinkServiceNetworkPoliciesEnabled">privateLinkServiceNetworkPoliciesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.serviceEndpointPolicyIds">serviceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.serviceEndpoints">serviceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.sharingScope">sharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.subnet.SubnetTimeouts</code> | timeouts block. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetProps.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#name Subnet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `defaultOutboundAccessEnabled`<sup>Optional</sup> <a name="defaultOutboundAccessEnabled" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.defaultOutboundAccessEnabled"></a>

```typescript
public readonly defaultOutboundAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.delegation"></a>

```typescript
public readonly delegation: IResolvable | SubnetDelegation[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.subnet.SubnetDelegation[]

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressPool`<sup>Optional</sup> <a name="ipAddressPool" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.ipAddressPool"></a>

```typescript
public readonly ipAddressPool: SubnetIpAddressPool;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetIpAddressPool

ip_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#ip_address_pool Subnet#ip_address_pool}

---

##### `privateEndpointNetworkPolicies`<sup>Optional</sup> <a name="privateEndpointNetworkPolicies" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.privateEndpointNetworkPolicies"></a>

```typescript
public readonly privateEndpointNetworkPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `privateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="privateLinkServiceNetworkPoliciesEnabled" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```typescript
public readonly privateLinkServiceNetworkPoliciesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `serviceEndpointPolicyIds`<sup>Optional</sup> <a name="serviceEndpointPolicyIds" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.serviceEndpointPolicyIds"></a>

```typescript
public readonly serviceEndpointPolicyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `serviceEndpoints`<sup>Optional</sup> <a name="serviceEndpoints" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.serviceEndpoints"></a>

```typescript
public readonly serviceEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `sharingScope`<sup>Optional</sup> <a name="sharingScope" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.sharingScope"></a>

```typescript
public readonly sharingScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#sharing_scope Subnet#sharing_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetTimeouts;
```

- *Type:* @cdktf/provider-azurerm.subnet.SubnetTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.SubnetProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

### SubnetSelection <a name="SubnetSelection" id="@kikoda/cdktf-constructs.azure.SubnetSelection"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.SubnetSelection.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const subnetSelection: azure.SubnetSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetSelection.property.subnetName">subnetName</a></code> | <code>string</code> | The name of the subnet to select. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetSelection.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | The type of subnet to select. |

---

##### `subnetName`<sup>Optional</sup> <a name="subnetName" id="@kikoda/cdktf-constructs.azure.SubnetSelection.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string
- *Default:* All subnets of the given type are selected

The name of the subnet to select.

---

##### `subnetType`<sup>Optional</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.SubnetSelection.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType
- *Default:* SubnetType.PRIVATE_WITH_NAT

The type of subnet to select.

---

### VNetProps <a name="VNetProps" id="@kikoda/cdktf-constructs.azure.VNetProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdktf-constructs.azure.VNetProps.Initializer"></a>

```typescript
import { azure } from '@kikoda/cdktf-constructs'

const vNetProps: azure.VNetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetProps.property.cidrBlock">cidrBlock</a></code> | <code><a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a></code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetProps.property.resourceGroup">resourceGroup</a></code> | <code>@cdktf/provider-azurerm.resourceGroup.ResourceGroup</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.VNetProps.property.subnetConfig">subnetConfig</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetConfig[]</code> | Subnets to create within the Virtual Network. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@kikoda/cdktf-constructs.azure.VNetProps.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: IpAddresses;
```

- *Type:* <a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a>

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@kikoda/cdktf-constructs.azure.VNetProps.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: ResourceGroup;
```

- *Type:* @cdktf/provider-azurerm.resourceGroup.ResourceGroup

---

##### `subnetConfig`<sup>Optional</sup> <a name="subnetConfig" id="@kikoda/cdktf-constructs.azure.VNetProps.property.subnetConfig"></a>

```typescript
public readonly subnetConfig: SubnetConfig[];
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetConfig[]
- *Default:* A single private subnet will be created

Subnets to create within the Virtual Network.

---

## Classes <a name="Classes" id="Classes"></a>

### IpAddresses <a name="IpAddresses" id="@kikoda/cdktf-constructs.IpAddresses"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.IpAddresses.buildCapacity">buildCapacity</a></code> | Builds subnets from the CIDR block based on the provided subnet masks. |
| <code><a href="#@kikoda/cdktf-constructs.IpAddresses.toString">toString</a></code> | *No description.* |

---

##### `buildCapacity` <a name="buildCapacity" id="@kikoda/cdktf-constructs.IpAddresses.buildCapacity"></a>

```typescript
public buildCapacity(subnetMasks: number[]): string[]
```

Builds subnets from the CIDR block based on the provided subnet masks.

For each subnet mask in the input array, a subnet is created sequentially
from the base CIDR block. The method ensures that each subnet starts at
the correct boundary and does not overlap with previous subnets and stays
within the original CIDR block.

###### `subnetMasks`<sup>Required</sup> <a name="subnetMasks" id="@kikoda/cdktf-constructs.IpAddresses.buildCapacity.parameter.subnetMasks"></a>

- *Type:* number[]

---

##### `toString` <a name="toString" id="@kikoda/cdktf-constructs.IpAddresses.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.IpAddresses.cidr">cidr</a></code> | *No description.* |

---

##### `cidr` <a name="cidr" id="@kikoda/cdktf-constructs.IpAddresses.cidr"></a>

```typescript
import { IpAddresses } from '@kikoda/cdktf-constructs'

IpAddresses.cidr(cidrBlock: string)
```

###### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@kikoda/cdktf-constructs.IpAddresses.cidr.parameter.cidrBlock"></a>

- *Type:* string

---



## Protocols <a name="Protocols" id="Protocols"></a>

### ISubnet <a name="ISubnet" id="@kikoda/cdktf-constructs.azure.ISubnet"></a>

- *Implemented By:* @kikoda/cdktf-constructs.azure.PrivateIsolatedSubnet, @kikoda/cdktf-constructs.azure.PrivateWithNatSubnet, @kikoda/cdktf-constructs.azure.Subnet, @kikoda/cdktf-constructs.azure.SubnetBase, @kikoda/cdktf-constructs.azure.ISubnet


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.ISubnet.property.searchName">searchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.ISubnet.property.subnetType">subnetType</a></code> | <code>@kikoda/cdktf-constructs.azure.SubnetType</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.ISubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdktf-constructs.azure.ISubnet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `searchName`<sup>Required</sup> <a name="searchName" id="@kikoda/cdktf-constructs.azure.ISubnet.property.searchName"></a>

```typescript
public readonly searchName: string;
```

- *Type:* string

---

##### `subnetType`<sup>Required</sup> <a name="subnetType" id="@kikoda/cdktf-constructs.azure.ISubnet.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* @kikoda/cdktf-constructs.azure.SubnetType

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdktf-constructs.azure.ISubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdktf-constructs.azure.ISubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### IVNet <a name="IVNet" id="@kikoda/cdktf-constructs.azure.IVNet"></a>

- *Implemented By:* @kikoda/cdktf-constructs.azure.VNet, @kikoda/cdktf-constructs.azure.VNetBase, @kikoda/cdktf-constructs.azure.IVNet

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.selectSubnets">selectSubnets</a></code> | *No description.* |

---

##### `selectSubnets` <a name="selectSubnets" id="@kikoda/cdktf-constructs.azure.IVNet.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): ISubnet[]
```

###### `selection`<sup>Optional</sup> <a name="selection" id="@kikoda/cdktf-constructs.azure.IVNet.selectSubnets.parameter.selection"></a>

- *Type:* @kikoda/cdktf-constructs.azure.SubnetSelection

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.property.cidrBlock">cidrBlock</a></code> | <code><a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a></code> | The address space of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.property.isolatedSubnets">isolatedSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of isolated private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.property.privateSubnets">privateSubnets</a></code> | <code>@kikoda/cdktf-constructs.azure.ISubnet[]</code> | List of private subnets in this Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.property.vnetId">vnetId</a></code> | <code>string</code> | The ID of the Virtual Network. |
| <code><a href="#@kikoda/cdktf-constructs.azure.IVNet.property.vnetName">vnetName</a></code> | <code>string</code> | The name of the Virtual Network. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@kikoda/cdktf-constructs.azure.IVNet.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: IpAddresses;
```

- *Type:* <a href="#@kikoda/cdktf-constructs.IpAddresses">IpAddresses</a>

The address space of the Virtual Network.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@kikoda/cdktf-constructs.azure.IVNet.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of isolated private subnets in this Virtual Network.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="@kikoda/cdktf-constructs.azure.IVNet.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* @kikoda/cdktf-constructs.azure.ISubnet[]

List of private subnets in this Virtual Network.

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@kikoda/cdktf-constructs.azure.IVNet.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

The ID of the Virtual Network.

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@kikoda/cdktf-constructs.azure.IVNet.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

The name of the Virtual Network.

---

## Enums <a name="Enums" id="Enums"></a>

### SubnetType <a name="SubnetType" id="@kikoda/cdktf-constructs.azure.SubnetType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetType.PRIVATE_WITH_NAT">PRIVATE_WITH_NAT</a></code> | A private subnet with a NAT gateway for outbound internet access. |
| <code><a href="#@kikoda/cdktf-constructs.azure.SubnetType.PRIVATE_ISOLATED">PRIVATE_ISOLATED</a></code> | A private isolated subnet with no internet access. |

---

##### `PRIVATE_WITH_NAT` <a name="PRIVATE_WITH_NAT" id="@kikoda/cdktf-constructs.azure.SubnetType.PRIVATE_WITH_NAT"></a>

A private subnet with a NAT gateway for outbound internet access.

---


##### `PRIVATE_ISOLATED` <a name="PRIVATE_ISOLATED" id="@kikoda/cdktf-constructs.azure.SubnetType.PRIVATE_ISOLATED"></a>

A private isolated subnet with no internet access.

---


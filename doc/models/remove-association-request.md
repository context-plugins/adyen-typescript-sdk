
# Remove Association Request

*This model accepts additional fields of type unknown.*

## Structure

`RemoveAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType3`](../../doc/models/sca-entity-type-3.md) | Required | - |
| `scaDeviceIds` | `string[]` | Required | A list of device ids associated with the entity that should be removed.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Minimum Length*: `30`, *Maximum Length*: `30` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RemoveAssociationRequest, ScaEntityType3 } from 'adyenlib';

const removeAssociationRequest: RemoveAssociationRequest = {
  entityId: 'entityId0',
  entityType: ScaEntityType3.LegalEntity,
  scaDeviceIds: [
    'scaDeviceIds4',
    'scaDeviceIds3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


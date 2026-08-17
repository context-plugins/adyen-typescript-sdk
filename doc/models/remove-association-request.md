
# Remove Association Request

## Structure

`RemoveAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType3Enum`](../../doc/models/sca-entity-type-3-enum.md) | Required | The type of the entity.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| `scaDeviceIds` | `string[]` | Required | A list of device ids associated with the entity that should be removed.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Minimum Length*: `30`, *Maximum Length*: `30` |

## Example

```ts
import { RemoveAssociationRequest, ScaEntityType3Enum } from 'adyen';

const removeAssociationRequest: RemoveAssociationRequest = {
  entityId: 'entityId0',
  entityType: ScaEntityType3Enum.LegalEntity,
  scaDeviceIds: [
    'scaDeviceIds4',
    'scaDeviceIds3'
  ],
};
```



# Approve Association Request

*This model accepts additional fields of type unknown.*

## Structure

`ApproveAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType2`](../../doc/models/sca-entity-type-2.md) | Required | - |
| `scaDeviceIds` | `string[]` | Required | List of device ids associated to the entity that will be approved.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Minimum Length*: `30`, *Maximum Length*: `30` |
| `status` | [`AssociationStatus1`](../../doc/models/association-status-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ApproveAssociationRequest,
  AssociationStatus1,
  ScaEntityType2,
} from 'adyenlib';

const approveAssociationRequest: ApproveAssociationRequest = {
  entityId: 'entityId8',
  entityType: ScaEntityType2.PaymentInstrument,
  scaDeviceIds: [
    'scaDeviceIds4',
    'scaDeviceIds5',
    'scaDeviceIds6'
  ],
  status: AssociationStatus1.PendingApproval,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


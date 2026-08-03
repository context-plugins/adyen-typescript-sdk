
# Association

*This model accepts additional fields of type unknown.*

## Structure

`Association`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType1`](../../doc/models/sca-entity-type-1.md) | Required | - |
| `scaDeviceId` | `string` | Required | The unique identifier for the SCA device.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `status` | [`AssociationStatus1`](../../doc/models/association-status-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Association, AssociationStatus1, ScaEntityType1 } from 'adyenlib';

const association: Association = {
  entityId: 'entityId2',
  entityType: ScaEntityType1.AccountHolder,
  scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
  status: AssociationStatus1.PendingApproval,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


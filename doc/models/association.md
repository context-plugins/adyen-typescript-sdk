
# Association

## Structure

`Association`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType1Enum`](../../doc/models/sca-entity-type-1-enum.md) | Required | The type of entity you are associating the device with.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| `scaDeviceId` | `string` | Required | The unique identifier for the SCA device.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `status` | [`AssociationStatus1Enum`](../../doc/models/association-status-1-enum.md) | Required | The status of the association.<br><br>Possible values: **active** or **pendingApproval**. |

## Example

```ts
import {
  Association,
  AssociationStatus1Enum,
  ScaEntityType1Enum,
} from 'adyen';

const association: Association = {
  entityId: 'entityId2',
  entityType: ScaEntityType1Enum.AccountHolder,
  scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
  status: AssociationStatus1Enum.PendingApproval,
};
```


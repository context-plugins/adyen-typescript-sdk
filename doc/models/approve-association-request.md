
# Approve Association Request

## Structure

`ApproveAssociationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType2Enum`](../../doc/models/sca-entity-type-2-enum.md) | Required | The type of the entity.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| `scaDeviceIds` | `string[]` | Required | List of device ids associated to the entity that will be approved.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Minimum Length*: `30`, *Maximum Length*: `30` |
| `status` | [`AssociationStatus1Enum`](../../doc/models/association-status-1-enum.md) | Required | The status of the association.<br><br>Possible values: **active** or **pendingApproval**. |

## Example

```ts
import {
  ApproveAssociationRequest,
  AssociationStatus1Enum,
  ScaEntityType2Enum,
} from 'adyen';

const approveAssociationRequest: ApproveAssociationRequest = {
  entityId: 'entityId8',
  entityType: ScaEntityType2Enum.PaymentInstrument,
  scaDeviceIds: [
    'scaDeviceIds4',
    'scaDeviceIds5',
    'scaDeviceIds6'
  ],
  status: AssociationStatus1Enum.PendingApproval,
};
```


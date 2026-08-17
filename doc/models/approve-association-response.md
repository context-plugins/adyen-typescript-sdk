
# Approve Association Response

## Structure

`ApproveAssociationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaAssociations` | [`Association[]`](../../doc/models/association.md) | Required | The list of associations.<br><br>**Constraints**: *Minimum Items*: `1` |

## Example

```ts
import {
  ApproveAssociationResponse,
  AssociationStatus1Enum,
  ScaEntityType1Enum,
} from 'adyen';

const approveAssociationResponse: ApproveAssociationResponse = {
  scaAssociations: [
    {
      entityId: 'entityId6',
      entityType: ScaEntityType1Enum.PaymentInstrument,
      scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
      status: AssociationStatus1Enum.PendingApproval,
    }
  ],
};
```


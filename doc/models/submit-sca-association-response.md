
# Submit Sca Association Response

## Structure

`SubmitScaAssociationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaAssociations` | [`Association[]`](../../doc/models/association.md) | Required | List of associations created to the entities and their statuses.<br><br>**Constraints**: *Minimum Items*: `1` |

## Example

```ts
import {
  AssociationStatus1Enum,
  ScaEntityType1Enum,
  SubmitScaAssociationResponse,
} from 'adyen';

const submitScaAssociationResponse: SubmitScaAssociationResponse = {
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


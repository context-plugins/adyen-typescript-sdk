
# Approve Association Response

*This model accepts additional fields of type unknown.*

## Structure

`ApproveAssociationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scaAssociations` | [`Association[]`](../../doc/models/association.md) | Required | The list of associations.<br><br>**Constraints**: *Minimum Items*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ApproveAssociationResponse,
  AssociationStatus1,
  ScaEntityType1,
} from 'adyen';

const approveAssociationResponse: ApproveAssociationResponse = {
  scaAssociations: [
    {
      entityId: 'entityId6',
      entityType: ScaEntityType1.PaymentInstrument,
      scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
      status: AssociationStatus1.PendingApproval,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


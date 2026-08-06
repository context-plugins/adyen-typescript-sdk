
# Payment Acquirer Data

Data related to the response from the payment Acquirer.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentAcquirerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `number \| undefined` | Optional | Identification of the Acquirer.<br>Identification of the Acquirer when the POI System is multi-acquirer. |
| `merchantId` | `string` | Required | Identification of the Merchant for the Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerPoiid` | `string` | Required | Identification of the POI for the payment Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerTransactionId` | [`AcquirerTransactionId \| undefined`](../../doc/models/acquirer-transaction-id.md) | Optional | - |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer.<br>If available.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `hostReconciliationId` | `string \| undefined` | Optional | Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentAcquirerData } from 'adyen';

const paymentAcquirerData: PaymentAcquirerData = {
  merchantId: 'MerchantID0',
  acquirerPoiid: 'AcquirerPOIID0',
  acquirerId: 46,
  acquirerTransactionId: {
    transactionId: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  approvalCode: 'ApprovalCode4',
  hostReconciliationId: 'HostReconciliationID4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


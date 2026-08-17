
# Payment Acquirer Data

Data related to the response from the payment Acquirer.

## Structure

`PaymentAcquirerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerID` | `number \| undefined` | Optional | Identification of the Acquirer.<br>Identification of the Acquirer when the POI System is multi-acquirer. |
| `merchantID` | `string` | Required | Identification of the Merchant for the Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerPOIID` | `string` | Required | Identification of the POI for the payment Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerTransactionID` | [`TransactionIDType6 \| undefined`](../../doc/models/transaction-id-type-6.md) | Optional | Identification of the Transaction for the Acquirer.<br>If provided by the Acquirer. |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer.<br>If available.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `hostReconciliationID` | `string \| undefined` | Optional | Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { PaymentAcquirerData } from 'adyen';

const paymentAcquirerData: PaymentAcquirerData = {
  merchantID: 'MerchantID0',
  acquirerPOIID: 'AcquirerPOIID0',
  acquirerID: 46,
  acquirerTransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  approvalCode: 'ApprovalCode4',
  hostReconciliationID: 'HostReconciliationID4',
};
```


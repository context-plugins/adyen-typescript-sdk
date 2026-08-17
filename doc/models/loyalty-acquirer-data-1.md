
# Loyalty Acquirer Data 1

Data related to the loyalty Acquirer during a loyalty transaction.
If content not empty.

## Structure

`LoyaltyAcquirerData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAcquirerID` | `string \| undefined` | Optional | Identification of the loyalty Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer. Could be an identifier of the approved transaction for the Acquirer. This data element is conditional for the Loyalty Acquirers. Used in the PaymentRequest request for a referral.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyTransactionID` | [`TransactionIDType \| undefined`](../../doc/models/transaction-id-type.md) | Optional | Identification of a transaction for the Sale System or the POI System. |
| `hostReconciliationID` | `string \| undefined` | Optional | Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { LoyaltyAcquirerData1 } from 'adyen';

const loyaltyAcquirerData1: LoyaltyAcquirerData1 = {
  loyaltyAcquirerID: 'LoyaltyAcquirerID4',
  approvalCode: 'ApprovalCode4',
  loyaltyTransactionID: {
    transactionID: 'TransactionID6',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  hostReconciliationID: 'HostReconciliationID4',
};
```


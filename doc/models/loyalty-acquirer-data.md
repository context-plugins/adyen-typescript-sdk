
# Loyalty Acquirer Data

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyAcquirerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAcquirerId` | `string \| undefined` | Optional | Identification of the loyalty Acquirer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer. Could be an identifier of the approved transaction for the Acquirer. This data element is conditional for the Loyalty Acquirers. Used in the PaymentRequest request for a referral.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyTransactionId` | [`LoyaltyTransactionId \| undefined`](../../doc/models/loyalty-transaction-id.md) | Optional | - |
| `hostReconciliationId` | `string \| undefined` | Optional | Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LoyaltyAcquirerData } from 'adyenlib';

const loyaltyAcquirerData: LoyaltyAcquirerData = {
  loyaltyAcquirerId: 'LoyaltyAcquirerID6',
  approvalCode: 'ApprovalCode4',
  loyaltyTransactionId: {
    transactionId: 'TransactionID6',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  hostReconciliationId: 'HostReconciliationID4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Transaction

*This model accepts additional fields of type unknown.*

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `bankAccountDetail` | [`BankAccountDetail1 \| undefined`](../../doc/models/bank-account-detail-1.md) | Optional | - |
| `captureMerchantReference` | `string \| undefined` | Optional | The merchant reference of a related capture. |
| `capturePspReference` | `string \| undefined` | Optional | The psp reference of a related capture. |
| `creationDate` | `string \| undefined` | Optional | The date on which the transaction was performed. |
| `description` | `string \| undefined` | Optional | A description of the transaction. |
| `destinationAccountCode` | `string \| undefined` | Optional | The code of the account to which funds were credited during an outgoing fund transfer. |
| `disputePspReference` | `string \| undefined` | Optional | The psp reference of the related dispute. |
| `disputeReasonCode` | `string \| undefined` | Optional | The reason code of a dispute. |
| `merchantReference` | `string \| undefined` | Optional | The merchant reference of a transaction. |
| `paymentPspReference` | `string \| undefined` | Optional | The psp reference of the related authorisation or transfer. |
| `payoutPspReference` | `string \| undefined` | Optional | The psp reference of the related payout. |
| `pspReference` | `string \| undefined` | Optional | The psp reference of a transaction. |
| `sourceAccountCode` | `string \| undefined` | Optional | The code of the account from which funds were debited during an incoming fund transfer. |
| `transactionStatus` | [`TransactionStatus1 \| undefined`](../../doc/models/transaction-status-1.md) | Optional | - |
| `transferCode` | `string \| undefined` | Optional | The transfer code of the transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Transaction } from 'adyenlib';

const transaction: Transaction = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bankAccountDetail: {
    accountNumber: 'accountNumber8',
    accountType: 'accountType4',
    bankAccountName: 'bankAccountName4',
    bankAccountReference: 'bankAccountReference4',
    bankAccountUuid: 'bankAccountUUID0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  captureMerchantReference: 'captureMerchantReference2',
  capturePspReference: 'capturePspReference6',
  creationDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


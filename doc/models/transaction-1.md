
# Transaction 1

## Structure

`Transaction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount \| undefined`](../../doc/models/amount.md) | Optional | The amount of the transaction. |
| `bankAccountDetail` | [`BankAccountDetail \| undefined`](../../doc/models/bank-account-detail.md) | Optional | The details of the bank account to where a payout was made. |
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
| `transactionStatus` | [`TransactionStatus1Enum \| undefined`](../../doc/models/transaction-status-1-enum.md) | Optional | The status of the transaction.<br><br>> Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`. |
| `transferCode` | `string \| undefined` | Optional | The transfer code of the transaction. |

## Example

```ts
import { Transaction1 } from 'adyen';

const transaction1: Transaction1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  bankAccountDetail: {
    accountNumber: 'accountNumber8',
    accountType: 'accountType4',
    bankAccountName: 'bankAccountName4',
    bankAccountReference: 'bankAccountReference4',
    bankAccountUUID: 'bankAccountUUID0',
  },
  captureMerchantReference: 'captureMerchantReference6',
  capturePspReference: 'capturePspReference4',
  creationDate: '2016-03-13T12:52:32.123Z',
};
```



# Account Holder Transaction List Request

## Structure

`AccountHolderTransactionListRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder that owns the account(s) of which retrieve the transaction list. |
| `transactionListsPerAccount` | [`TransactionListForAccount[] \| undefined`](../../doc/models/transaction-list-for-account.md) | Optional | A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included. |
| `transactionStatuses` | [`TransactionStatusEnum[] \| undefined`](../../doc/models/transaction-status-enum.md) | Optional | A list of statuses to include in the transaction list. If left blank, all transactions will be included.<br><br>> Permitted values:<br>> <br>> * `PendingCredit` - a pending balance credit.<br>> * `CreditFailed` - a pending credit failure; the balance will not be credited.<br>> * `Credited` - a credited balance.<br>> * `PendingDebit` - a pending balance debit (e.g., a refund).<br>> * `CreditClosed` - a pending credit closed; the balance will not be credited.<br>> * `CreditSuspended` - a pending credit closed; the balance will not be credited.<br>> * `DebitFailed` - a pending debit failure; the balance will not be debited.<br>> * `Debited` - a debited balance (e.g., a refund).<br>> * `DebitReversedReceived` - a pending refund reversal.<br>> * `DebitedReversed` - a reversed refund.<br>> * `ChargebackReceived` - a received chargeback request.<br>> * `Chargeback` - a processed chargeback.<br>> * `ChargebackReversedReceived` - a pending chargeback reversal.<br>> * `ChargebackReversed` - a reversed chargeback.<br>> * `Converted` - converted.<br>> * `ManualCorrected` - manual booking/adjustment by Adyen.<br>> * `Payout` - a payout.<br>> * `PayoutReversed` - a reversed payout.<br>> * `PendingFundTransfer` - a pending transfer of funds from one account to another.<br>> * `FundTransfer` - a transfer of funds from one account to another. |

## Example

```ts
import {
  AccountHolderTransactionListRequest,
  TransactionStatusEnum,
} from 'adyen';

const accountHolderTransactionListRequest: AccountHolderTransactionListRequest = {
  accountHolderCode: 'accountHolderCode0',
  transactionListsPerAccount: [
    {
      accountCode: 'accountCode6',
      page: 244,
    }
  ],
  transactionStatuses: [
    TransactionStatusEnum.SecondChargebackCorrectionReceived,
    TransactionStatusEnum.SecondChargebackReceived,
    TransactionStatusEnum.BalanceNotPaidOutTransfer
  ],
};
```


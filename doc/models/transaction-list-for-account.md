
# Transaction List for Account

## Structure

`TransactionListForAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The account for which to retrieve the transactions. |
| `page` | `number` | Required | The page of transactions to retrieve.<br>Each page lists fifty (50) transactions.  The most recent transactions are included on page 1. |

## Example

```ts
import { TransactionListForAccount } from 'adyen';

const transactionListForAccount: TransactionListForAccount = {
  accountCode: 'accountCode4',
  page: 76,
};
```


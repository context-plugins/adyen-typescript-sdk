
# Transaction List for Account

*This model accepts additional fields of type unknown.*

## Structure

`TransactionListForAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The account for which to retrieve the transactions. |
| `page` | `number` | Required | The page of transactions to retrieve.<br>Each page lists fifty (50) transactions.  The most recent transactions are included on page 1. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionListForAccount } from 'adyenlib';

const transactionListForAccount: TransactionListForAccount = {
  accountCode: 'accountCode4',
  page: 76,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Payment Totals

Totals of the payment transaction during the reconciliation period.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentTotals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`TransactionType11`](../../doc/models/transaction-type-11.md) | Required | - |
| `transactionCount` | `number` | Required | Number of processed transaction during the period. |
| `transactionAmount` | `number` | Required | Sum of amount of processed transaction during the period.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentTotals, TransactionType11 } from 'adyen';

const paymentTotals: PaymentTotals = {
  transactionType: TransactionType11.Declined,
  transactionCount: 128,
  transactionAmount: 228.16,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


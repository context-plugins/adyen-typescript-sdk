
# Mandate 11

The mandate details to initiate recurring transaction.

*This model accepts additional fields of type unknown.*

## Structure

`Mandate11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | The billing amount (in minor units) of the recurring transactions. |
| `amountRule` | [`AmountRule \| undefined`](../../doc/models/amount-rule.md) | Optional | - |
| `billingAttemptsRule` | [`BillingAttemptsRule \| undefined`](../../doc/models/billing-attempts-rule.md) | Optional | - |
| `billingDay` | `string \| undefined` | Optional | The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`. |
| `count` | `string \| undefined` | Optional | The number of transactions that can be performed within the given frequency. |
| `endsAt` | `string` | Required | End date of the billing plan, in YYYY-MM-DD format. |
| `frequency` | [`Frequency1`](../../doc/models/frequency-1.md) | Required | - |
| `remarks` | `string \| undefined` | Optional | The message shown by UPI to the shopper on the approval screen. |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AmountRule,
  BillingAttemptsRule,
  Frequency1,
  Mandate11,
} from 'adyenlib';

const mandate11: Mandate11 = {
  amount: 'amount8',
  endsAt: 'endsAt6',
  frequency: Frequency1.HalfYearly,
  amountRule: AmountRule.Max,
  billingAttemptsRule: BillingAttemptsRule.Before,
  billingDay: 'billingDay8',
  count: 'count2',
  remarks: 'remarks2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


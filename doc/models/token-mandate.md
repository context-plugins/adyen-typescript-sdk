
# Token Mandate

*This model accepts additional fields of type unknown.*

## Structure

`TokenMandate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdType` | `string \| undefined` | Optional | The type of account identifier for the masked account number. |
| `amount` | `string` | Required | The billing amount (in minor units) of the recurring transactions. |
| `amountRule` | [`AmountRule \| undefined`](../../doc/models/amount-rule.md) | Optional | - |
| `billingAttemptsRule` | [`BillingAttemptsRule \| undefined`](../../doc/models/billing-attempts-rule.md) | Optional | - |
| `billingDay` | `string \| undefined` | Optional | The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`. |
| `count` | `string \| undefined` | Optional | The number of transactions that can be performed within the given frequency. |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `endsAt` | `string` | Required | End date of the billing plan, in YYYY-MM-DD format. |
| `frequency` | [`Frequency1`](../../doc/models/frequency-1.md) | Required | - |
| `mandateId` | `string` | Required | The unique identifier of the mandate. |
| `maskedAccountId` | `string \| undefined` | Optional | The masked account number associated with the mandate. |
| `minAmount` | `string \| undefined` | Optional | For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app. |
| `providerId` | `string` | Required | The provider-specific identifier for this mandate. |
| `recurringAmount` | `string \| undefined` | Optional | For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment. |
| `recurringStatement` | `string \| undefined` | Optional | The text that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters.<br><br>**Constraints**: *Maximum Length*: `35` |
| `remarks` | `string \| undefined` | Optional | Additional remarks or notes about the mandate. |
| `retryPolicy` | [`RetryPolicy \| undefined`](../../doc/models/retry-policy.md) | Optional | - |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. |
| `status` | `string` | Required | The status of the mandate. Examples : active, revoked, completed, expired |
| `txVariant` | `string` | Required | The transaction variant used for this mandate. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AmountRule,
  BillingAttemptsRule,
  Frequency1,
  TokenMandate,
} from 'adyen';

const tokenMandate: TokenMandate = {
  amount: 'amount4',
  currency: 'currency2',
  endsAt: 'endsAt2',
  frequency: Frequency1.Monthly,
  mandateId: 'mandateId4',
  providerId: 'providerId6',
  status: 'status4',
  txVariant: 'txVariant0',
  accountIdType: 'accountIdType2',
  amountRule: AmountRule.Max,
  billingAttemptsRule: BillingAttemptsRule.After,
  billingDay: 'billingDay4',
  count: 'count8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


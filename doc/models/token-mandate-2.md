
# Token Mandate 2

Mandate details for the stored payment method.

## Structure

`TokenMandate2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdType` | `string \| undefined` | Optional | The type of account identifier for the masked account number. |
| `amount` | `string` | Required | The billing amount (in minor units) of the recurring transactions. |
| `amountRule` | [`AmountRuleEnum \| undefined`](../../doc/models/amount-rule-enum.md) | Optional | The limitation rule of the billing amount.<br><br>Possible values:<br><br>* **max**: The transaction amount can not exceed the `amount`.<br><br>* **exact**: The transaction amount should be the same as the `amount`. |
| `billingAttemptsRule` | [`BillingAttemptsRuleEnum \| undefined`](../../doc/models/billing-attempts-rule-enum.md) | Optional | The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.<br><br>Possible values:<br><br>* **on**: On a specific date.<br><br>* **before**:  Before and on a specific date.<br><br>* **after**: On and after a specific date. |
| `billingDay` | `string \| undefined` | Optional | The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`. |
| `count` | `string \| undefined` | Optional | The number of transactions that can be performed within the given frequency. |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `endsAt` | `string` | Required | End date of the billing plan, in YYYY-MM-DD format. |
| `frequency` | [`FrequencyEnum`](../../doc/models/frequency-enum.md) | Required | The frequency with which a shopper should be charged.<br><br>Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**. |
| `mandateId` | `string` | Required | The unique identifier of the mandate. |
| `maskedAccountId` | `string \| undefined` | Optional | The masked account number associated with the mandate. |
| `minAmount` | `string \| undefined` | Optional | For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app. |
| `providerId` | `string` | Required | The provider-specific identifier for this mandate. |
| `recurringAmount` | `string \| undefined` | Optional | For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment. |
| `recurringStatement` | `string \| undefined` | Optional | The text that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters.<br><br>**Constraints**: *Maximum Length*: `35` |
| `remarks` | `string \| undefined` | Optional | Additional remarks or notes about the mandate. |
| `retryPolicy` | [`RetryPolicyEnum \| undefined`](../../doc/models/retry-policy-enum.md) | Optional | When set to true, you can retry for failed recurring payments. The default value is true. |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. |
| `status` | `string` | Required | The status of the mandate. Examples : active, revoked, completed, expired |
| `txVariant` | `string` | Required | The transaction variant used for this mandate. |

## Example

```ts
import {
  AmountRuleEnum,
  BillingAttemptsRuleEnum,
  FrequencyEnum,
  TokenMandate2,
} from 'adyen';

const tokenMandate2: TokenMandate2 = {
  amount: 'amount6',
  currency: 'currency4',
  endsAt: 'endsAt4',
  frequency: FrequencyEnum.Weekly,
  mandateId: 'mandateId4',
  providerId: 'providerId8',
  status: 'status6',
  txVariant: 'txVariant2',
  accountIdType: 'accountIdType6',
  amountRule: AmountRuleEnum.Max,
  billingAttemptsRule: BillingAttemptsRuleEnum.After,
  billingDay: 'billingDay6',
  count: 'count0',
};
```


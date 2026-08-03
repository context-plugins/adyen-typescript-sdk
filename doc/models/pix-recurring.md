
# Pix Recurring

*This model accepts additional fields of type unknown.*

## Structure

`PixRecurring`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingDate` | `string \| undefined` | Optional | The date on which the shopper's payment method will be charged, in YYYY-MM-DD format. |
| `businessDayOnly` | `boolean \| undefined` | Optional | Flag used to define whether liquidation can happen only on business days |
| `endsAt` | `string \| undefined` | Optional | End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency and the start date of the billing plan. If left blank, the subscription will continue indefinitely unless it is cancelled by the shopper. |
| `frequency` | [`Frequency2 \| undefined`](../../doc/models/frequency-2.md) | Optional | - |
| `minAmount` | [`MinAmount \| undefined`](../../doc/models/min-amount.md) | Optional | - |
| `originalPspReference` | `string \| undefined` | Optional | The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you received after the billing date. |
| `recurringAmount` | [`RecurringAmount \| undefined`](../../doc/models/recurring-amount.md) | Optional | - |
| `recurringStatement` | `string \| undefined` | Optional | The text that that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters. |
| `retryPolicy` | `boolean \| undefined` | Optional | When set to true, you can retry for failed recurring payments. The default value is true. |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction date. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Frequency2, PixRecurring } from 'adyenlib';

const pixRecurring: PixRecurring = {
  billingDate: 'billingDate0',
  businessDayOnly: false,
  endsAt: 'endsAt8',
  frequency: Frequency2.Yearly,
  minAmount: {
    currency: 'currency6',
    value: BigInt(156),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Pix Recurring

## Structure

`PixRecurring`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingDate` | `string \| undefined` | Optional | The date on which the shopper's payment method will be charged, in YYYY-MM-DD format. |
| `businessDayOnly` | `boolean \| undefined` | Optional | Flag used to define whether liquidation can happen only on business days |
| `endsAt` | `string \| undefined` | Optional | End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency and the start date of the billing plan. If left blank, the subscription will continue indefinitely unless it is cancelled by the shopper. |
| `frequency` | [`Frequency2Enum \| undefined`](../../doc/models/frequency-2-enum.md) | Optional | The frequency at which the shopper will be charged. |
| `minAmount` | [`Amount42 \| undefined`](../../doc/models/amount-42.md) | Optional | For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app. |
| `originalPspReference` | `string \| undefined` | Optional | The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you received after the billing date. |
| `recurringAmount` | [`Amount43 \| undefined`](../../doc/models/amount-43.md) | Optional | For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment. |
| `recurringStatement` | `string \| undefined` | Optional | The text that that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters. |
| `retryPolicy` | `boolean \| undefined` | Optional | When set to true, you can retry for failed recurring payments. The default value is true. |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction date. |

## Example

```ts
import { Frequency2Enum, PixRecurring } from 'adyen';

const pixRecurring: PixRecurring = {
  billingDate: 'billingDate0',
  businessDayOnly: false,
  endsAt: 'endsAt8',
  frequency: Frequency2Enum.Yearly,
  minAmount: {
    currency: 'currency6',
    value: BigInt(156),
  },
};
```



# Payment Amount Update Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentAmountUpdateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustAuthorisationData` | `string \| undefined` | Optional | The data blob for subsequent synchronous adjust authorisation calls. Returned when the synchronous flow is used. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `industryUsage` | [`IndustryUsage1 \| undefined`](../../doc/models/industry-usage-1.md) | Optional | - |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to update. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the amount update request. |
| `reference` | `string` | Required | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments). |
| `status` | [`Status23`](../../doc/models/status-23.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  IndustryUsage1,
  PaymentAmountUpdateResponse,
  Status23,
  Type111,
} from 'adyenlib';

const paymentAmountUpdateResponse: PaymentAmountUpdateResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount2',
  paymentPspReference: 'paymentPspReference8',
  pspReference: 'pspReference2',
  reference: 'reference6',
  status: Status23.Refused,
  adjustAuthorisationData: 'adjustAuthorisationData8',
  industryUsage: IndustryUsage1.DelayedCharge,
  lineItems: [
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  splits: [
    {
      type: Type111.Default,
      account: 'account2',
      amount: {
        value: BigInt(110),
        currency: 'currency2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description2',
      reference: 'reference2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


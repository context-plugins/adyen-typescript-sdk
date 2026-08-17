
# Payment Amount Update Response

## Structure

`PaymentAmountUpdateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustAuthorisationData` | `string \| undefined` | Optional | The data blob for subsequent synchronous adjust authorisation calls. Returned when the synchronous flow is used. |
| `amount` | [`Amount30`](../../doc/models/amount-30.md) | Required | The updated amount. |
| `industryUsage` | [`IndustryUsage1Enum \| undefined`](../../doc/models/industry-usage-1-enum.md) | Optional | The reason for the amount update. Possible values:<br><br>* **delayedCharge**<br>* **noShow**<br>* **installment** |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to update. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the amount update request. |
| `reference` | `string` | Required | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments). |
| `status` | [`Status2Enum`](../../doc/models/status-2-enum.md) | Required | The status of your request.<br><br>If you included `adjustAuthorisationData` in your request, possible values are the following:<br><br>* **authorised**<br><br>* **refused**<br><br>Otherwise, the value is **received**. |

## Example

```ts
import {
  IndustryUsage1Enum,
  PaymentAmountUpdateResponse,
  Status2Enum,
  Type11Enum,
} from 'adyen';

const paymentAmountUpdateResponse: PaymentAmountUpdateResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount2',
  paymentPspReference: 'paymentPspReference8',
  pspReference: 'pspReference2',
  reference: 'reference6',
  status: Status2Enum.Refused,
  adjustAuthorisationData: 'adjustAuthorisationData8',
  industryUsage: IndustryUsage1Enum.DelayedCharge,
  lineItems: [
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    }
  ],
  splits: [
    {
      type: Type11Enum.Default,
      account: 'account2',
      amount: {
        value: BigInt(110),
        currency: 'currency2',
      },
      description: 'description2',
      reference: 'reference2',
    }
  ],
};
```


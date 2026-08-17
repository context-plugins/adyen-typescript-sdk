
# Payment Refund Response

## Structure

`PaymentRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount39`](../../doc/models/amount-39.md) | Required | The refund amount. |
| `capturePspReference` | `string \| undefined` | Optional | This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the specific capture to refund. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `merchantRefundReason` | [`MerchantRefundReason1Enum \| null \| undefined`](../../doc/models/merchant-refund-reason-1-enum.md) | Optional | Your reason for the refund request. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to refund. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the refund request. |
| `reference` | `string \| undefined` | Optional | Your reference for the refund request. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/). |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br><br>**Value**: `'received'` |
| `store` | `string \| undefined` | Optional | The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails. |

## Example

```ts
import {
  MerchantRefundReason1Enum,
  PaymentRefundResponse,
  Type11Enum,
} from 'adyen';

const paymentRefundResponse: PaymentRefundResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount6',
  paymentPspReference: 'paymentPspReference0',
  pspReference: 'pspReference6',
  status: 'received',
  capturePspReference: 'capturePspReference0',
  lineItems: [
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    }
  ],
  merchantRefundReason: MerchantRefundReason1Enum.RETURN,
  reference: 'reference2',
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
    },
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



# Payment Capture Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentCaptureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to capture. |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | - |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the capture request. |
| `reference` | `string \| undefined` | Optional | Your reference for the capture request. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/). |
| `status` | [`Status20`](../../doc/models/status-20.md) | Required | The status of your request. This will always have the value **received**. |
| `subMerchants` | [`SubMerchantInfo[] \| undefined`](../../doc/models/sub-merchant-info.md) | Optional | List of sub-merchants. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Behavior, PaymentCaptureResponse, Status20, Type111 } from 'adyen';

const paymentCaptureResponse: PaymentCaptureResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount4',
  paymentPspReference: 'paymentPspReference8',
  pspReference: 'pspReference4',
  status: Status20.Received,
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
    },
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
  platformChargebackLogic: {
    behavior: Behavior.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reference: 'reference0',
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
    },
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
    },
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
  subMerchants: [
    {
      address: {
        city: 'city6',
        country: 'country0',
        houseNumberOrName: 'houseNumberOrName4',
        postalCode: 'postalCode8',
        street: 'street6',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      email: 'email6',
      id: 'id0',
      mcc: 'mcc0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      address: {
        city: 'city6',
        country: 'country0',
        houseNumberOrName: 'houseNumberOrName4',
        postalCode: 'postalCode8',
        street: 'street6',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      email: 'email6',
      id: 'id0',
      mcc: 'mcc0',
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


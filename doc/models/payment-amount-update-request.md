
# Payment Amount Update Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentAmountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustAuthType` | [`AdjustAuthType \| undefined`](../../doc/models/adjust-auth-type.md) | Optional | - |
| `adjustAuthorisationData` | `string \| undefined` | Optional | The required data to make a [synchronous authorization adjustment](https://docs.adyen.com/online-payments/adjust-authorisation). Pass the corresponding value from the `/payments` response or webhook message. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | - |
| `industryUsage` | [`IndustryUsage1 \| undefined`](../../doc/models/industry-usage-1.md) | Optional | - |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `mpiData` | [`MpiData \| undefined`](../../doc/models/mpi-data.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdjustAuthType,
  IndustryUsage1,
  PaymentAmountUpdateRequest,
} from 'adyen';

const paymentAmountUpdateRequest: PaymentAmountUpdateRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount8',
  adjustAuthType: AdjustAuthType.CardholderInitiatedTransaction,
  adjustAuthorisationData: 'adjustAuthorisationData4',
  applicationInfo: {
    adyenLibrary: {
      name: 'name8',
      version: 'version4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    adyenPaymentSource: {
      name: 'name2',
      version: 'version8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    externalPlatform: {
      integrator: 'integrator0',
      name: 'name4',
      version: 'version0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchantApplication: {
      name: 'name2',
      version: 'version8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchantDevice: {
      os: 'os4',
      osVersion: 'osVersion6',
      reference: 'reference8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  industryUsage: IndustryUsage1.Installment,
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
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


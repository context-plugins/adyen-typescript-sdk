
# Payment Amount Update Request

## Structure

`PaymentAmountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adjustAuthType` | [`AdjustAuthTypeEnum \| undefined`](../../doc/models/adjust-auth-type-enum.md) | Optional | The type of adjustment. Possible values:<br><br>* **cardholderInitiatedTransaction**<br><br>* **merchantInitiatedTransaction** |
| `adjustAuthorisationData` | `string \| undefined` | Optional | The required data to make a [synchronous authorization adjustment](https://docs.adyen.com/online-payments/adjust-authorisation). Pass the corresponding value from the `/payments` response or webhook message. |
| `amount` | [`Amount29`](../../doc/models/amount-29.md) | Required | The updated amount. The `currency` must match the currency used in authorisation. |
| `applicationInfo` | [`ApplicationInfo \| undefined`](../../doc/models/application-info.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `industryUsage` | [`IndustryUsage1Enum \| undefined`](../../doc/models/industry-usage-1-enum.md) | Optional | The reason for the amount update. Possible values:<br><br>* **delayedCharge**<br>* **noShow**<br>* **installment** |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `mpiData` | [`ThreeDSecureData3 \| undefined`](../../doc/models/three-d-secure-data-3.md) | Optional | Authentication data from a [merchant plug-in (MPI)](https://en.wikipedia.org/wiki/Merchant_plug-in) like Mastercard SecureCode, Visa Secure, or Cartes Bancaires. Required for cardholder-initiated transaction (CIT) adjustments. |
| `reference` | `string \| undefined` | Optional | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments). |

## Example

```ts
import {
  AdjustAuthTypeEnum,
  IndustryUsage1Enum,
  PaymentAmountUpdateRequest,
} from 'adyen';

const paymentAmountUpdateRequest: PaymentAmountUpdateRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount8',
  adjustAuthType: AdjustAuthTypeEnum.CardholderInitiatedTransaction,
  adjustAuthorisationData: 'adjustAuthorisationData4',
  applicationInfo: {
    adyenLibrary: {
      name: 'name8',
      version: 'version4',
    },
    adyenPaymentSource: {
      name: 'name2',
      version: 'version8',
    },
    externalPlatform: {
      integrator: 'integrator0',
      name: 'name4',
      version: 'version0',
    },
    merchantApplication: {
      name: 'name2',
      version: 'version8',
    },
    merchantDevice: {
      os: 'os4',
      osVersion: 'osVersion6',
      reference: 'reference8',
    },
  },
  industryUsage: IndustryUsage1Enum.Installment,
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
    }
  ],
};
```


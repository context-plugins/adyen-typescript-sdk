
# Payment Request 3 Ds 2

*This model accepts additional fields of type unknown.*

## Structure

`PaymentRequest3Ds2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountInfo` | [`AccountInfo2 \| undefined`](../../doc/models/account-info-2.md) | Optional | - |
| `additionalAmount` | [`AdditionalAmount \| undefined`](../../doc/models/additional-amount.md) | Optional | - |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | - |
| `billingAddress` | [`BillingAddress7 \| undefined`](../../doc/models/billing-address-7.md) | Optional | - |
| `browserInfo` | [`BrowserInfo2 \| undefined`](../../doc/models/browser-info-2.md) | Optional | - |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `dccQuote` | [`ForexQuote \| undefined`](../../doc/models/forex-quote.md) | Optional | - |
| `deliveryAddress` | [`DeliveryAddress6 \| undefined`](../../doc/models/delivery-address-6.md) | Optional | - |
| `deliveryDate` | `string \| undefined` | Optional | The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00 |
| `deviceFingerprint` | `string \| undefined` | Optional | A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).<br><br>**Constraints**: *Maximum Length*: `5000` |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `installments` | [`Installments2 \| undefined`](../../doc/models/installments-2.md) | Optional | - |
| `localizedShopperStatement` | `Record<string, string> \| undefined` | Optional | The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric. |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br><br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`. |
| `merchantRiskIndicator` | [`MerchantRiskIndicator \| undefined`](../../doc/models/merchant-risk-indicator.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br><br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
| `orderReference` | `string \| undefined` | Optional | When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. |
| `recurring` | [`Recurring3 \| undefined`](../../doc/models/recurring-3.md) | Optional | - |
| `recurringProcessingModel` | [`RecurringProcessingModel \| undefined`](../../doc/models/recurring-processing-model.md) | Optional | - |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `selectedBrand` | `string \| undefined` | Optional | Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br><br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card. |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `sessionId` | `string \| undefined` | Optional | A session ID used to identify a payment session. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`. |
| `shopperIp` | `string \| undefined` | Optional | The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `shopperInteraction` | [`ShopperInteraction1 \| undefined`](../../doc/models/shopper-interaction-1.md) | Optional | - |
| `shopperLocale` | `string \| undefined` | Optional | The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**. |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split). |
| `store` | `string \| undefined` | Optional | Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number.<br>The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`. |
| `threeDs2RequestData` | [`ThreeDs2RequestData1 \| undefined`](../../doc/models/three-ds-2-request-data-1.md) | Optional | - |
| `threeDs2Result` | [`ThreeDs2Result2 \| undefined`](../../doc/models/three-ds-2-result-2.md) | Optional | - |
| `threeDs2Token` | `string \| undefined` | Optional | The ThreeDS2Token that was returned in the /authorise call. |
| `threeDsAuthenticationOnly` | `boolean \| undefined` | Optional | Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.<br><br>**Default**: `false` |
| `totalsGroup` | `string \| undefined` | Optional | The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `trustedShopper` | `boolean \| undefined` | Optional | Set to true if the payment should be routed to a trusted MID. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountAgeIndicator,
  AccountChangeIndicator,
  AccountType1,
  PaymentRequest3Ds2,
} from 'adyen';

const paymentRequest3Ds2: PaymentRequest3Ds2 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount4',
  reference: 'reference8',
  accountInfo: {
    accountAgeIndicator: AccountAgeIndicator.From30To60Days,
    accountChangeDate: '2016-03-13T12:52:32.123Z',
    accountChangeIndicator: AccountChangeIndicator.ThisTransaction,
    accountCreationDate: '2016-03-13T12:52:32.123Z',
    accountType: AccountType1.NotApplicable,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalAmount: {
    currency: 'currency8',
    value: BigInt(106),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalData: {
    'key0': 'additionalData2',
    'key1': 'additionalData3',
    'key2': 'additionalData4'
  },
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
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threeDsAuthenticationOnly: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


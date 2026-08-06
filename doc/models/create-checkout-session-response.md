
# Create Checkout Session Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateCheckoutSessionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountInfo` | [`AccountInfo \| undefined`](../../doc/models/account-info.md) | Optional | - |
| `additionalAmount` | [`AdditionalAmount \| undefined`](../../doc/models/additional-amount.md) | Optional | - |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]` |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | - |
| `authenticationData` | [`AuthenticationData \| undefined`](../../doc/models/authentication-data.md) | Optional | - |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | - |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]` |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `channel` | [`Channel \| undefined`](../../doc/models/channel.md) | Optional | - |
| `company` | [`Company \| undefined`](../../doc/models/company.md) | Optional | - |
| `countryCode` | `string \| undefined` | Optional | The shopper's two-letter country code. |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. |
| `deliverAt` | `string \| undefined` | Optional | The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `deliveryAddress` | [`DeliveryAddress1 \| undefined`](../../doc/models/delivery-address-1.md) | Optional | - |
| `enableOneClick` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition). |
| `enablePayOut` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be tokenized for payouts. |
| `enableRecurring` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments. |
| `expiresAt` | `string` | Required | The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation. |
| `fundOrigin` | [`FundOrigin \| undefined`](../../doc/models/fund-origin.md) | Optional | - |
| `fundRecipient` | [`FundRecipient \| undefined`](../../doc/models/fund-recipient.md) | Optional | - |
| `id` | `string` | Required, Read-only | A unique identifier of the session. |
| `installmentOptions` | [`Record<string, CheckoutSessionInstallmentOption> \| undefined`](../../doc/models/checkout-session-installment-option.md) | Optional | A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br><br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty. |
| `mandate` | [`Mandate1 \| undefined`](../../doc/models/mandate-1.md) | Optional | - |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br><br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br><br>* Maximum 20 key-value pairs per request.<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
| `mode` | [`Mode \| undefined`](../../doc/models/mode.md) | Optional | - |
| `mpiData` | [`MpiData \| undefined`](../../doc/models/mpi-data.md) | Optional | - |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | - |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Only for 3D Secure 2. |
| `recurringFrequency` | `string \| undefined` | Optional | Minimum number of days between authorisations. Only for 3D Secure 2. |
| `recurringProcessingModel` | [`RecurringProcessingModel1 \| undefined`](../../doc/models/recurring-processing-model-1.md) | Optional | - |
| `redirectFromIssuerMethod` | `string \| undefined` | Optional | Specifies the redirect method (GET or POST) when redirecting back from the issuer. |
| `redirectToIssuerMethod` | `string \| undefined` | Optional | Specifies the redirect method (GET or POST) when redirecting to the issuer. |
| `reference` | `string` | Required | The reference to uniquely identify a payment. |
| `returnUrl` | `string` | Required | The URL to return to in case of a redirection.<br>The format depends on the channel.<br><br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>  Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>  Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>  Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.<br><br>**Constraints**: *Maximum Length*: `1024` |
| `riskData` | [`RiskData \| undefined`](../../doc/models/risk-data.md) | Optional | - |
| `sessionData` | `string \| undefined` | Optional | The payment session data you need to pass to your front end. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. |
| `shopperIp` | `string \| undefined` | Optional | The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `shopperInteraction` | [`ShopperInteraction1 \| undefined`](../../doc/models/shopper-interaction-1.md) | Optional | - |
| `shopperLocale` | `string \| undefined` | Optional | The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`. |
| `shopperName` | [`ShopperName \| undefined`](../../doc/models/shopper-name.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `256` |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**. |
| `showInstallmentAmount` | `boolean \| undefined` | Optional | Set to true to show the payment amount per installment. |
| `showRemovePaymentMethodButton` | `boolean \| undefined` | Optional | Set to **true** to show a button that lets the shopper remove a stored payment method. |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `splitCardFundingSources` | `boolean \| undefined` | Optional | Boolean value indicating whether the card payment method should be split into separate debit and credit options.<br><br>**Default**: `false` |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split). |
| `store` | `string \| undefined` | Optional | Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment. |
| `storeFiltrationMode` | [`StoreFiltrationMode \| undefined`](../../doc/models/store-filtration-mode.md) | Optional | - |
| `storePaymentMethod` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types). |
| `storePaymentMethodMode` | [`StorePaymentMethodMode \| undefined`](../../doc/models/store-payment-method-mode.md) | Optional | - |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number.<br>The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`. |
| `themeId` | `string \| undefined` | Optional | Sets a custom theme for [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout). The value can be any of the **Theme ID** values from your Customer Area. |
| `thirdPartyTokenRedundancyInfo` | [`ThirdPartyTokenRedundancyInfo \| undefined`](../../doc/models/third-party-token-redundancy-info.md) | Optional | - |
| `threeDs2RequestData` | [`CheckoutSessionThreeDs2RequestData \| undefined`](../../doc/models/checkout-session-three-ds-2-request-data.md) | Optional | - |
| `threeDsAuthenticationOnly` | `boolean \| undefined` | Optional | Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.<br><br>**Default**: `false` |
| `trustedShopper` | `boolean \| undefined` | Optional | Set to true if the payment should be routed to a trusted MID. |
| `url` | `string \| undefined` | Optional | The URL for the Hosted Checkout page. Redirect the shopper to this URL so they can make the payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountAgeIndicator,
  AccountChangeIndicator,
  AccountType1,
  CreateCheckoutSessionResponse,
} from 'adyen';

const createCheckoutSessionResponse: CreateCheckoutSessionResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  expiresAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  merchantAccount: 'merchantAccount6',
  reference: 'reference0',
  returnUrl: 'returnUrl2',
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
    'key0': 'additionalData4'
  },
  allowedPaymentMethods: [
    'allowedPaymentMethods9'
  ],
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
  splitCardFundingSources: false,
  threeDsAuthenticationOnly: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


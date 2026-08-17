
# Payment Link Response

## Structure

`PaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]` |
| `amount` | [`Amount35`](../../doc/models/amount-35.md) | Required | The payment amount and currency. |
| `applicationInfo` | [`ApplicationInfo \| undefined`](../../doc/models/application-info.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]` |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `countryCode` | `string \| undefined` | Optional | The shopper's two-letter country code.<br><br>**Constraints**: *Maximum Length*: `100` |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `deliverAt` | `string \| undefined` | Optional | The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `deliveryAddress` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | The address where the purchased goods should be delivered. |
| `description` | `string \| undefined` | Optional | A short description visible on the payment page.<br>Maximum length: 280 characters. |
| `expiresAt` | `string \| undefined` | Optional | The date when the payment link expires.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.<br><br>The maximum expiry date is 70 days after the payment link is created.<br><br>If not provided, the payment link expires 24 hours after it was created. |
| `fundOrigin` | [`FundOrigin1 \| undefined`](../../doc/models/fund-origin-1.md) | Optional | The person or entity funding the money. |
| `fundRecipient` | [`FundRecipient1 \| undefined`](../../doc/models/fund-recipient-1.md) | Optional | the person or entity receiving the money |
| `id` | `string` | Required, Read-only | A unique identifier of the payment link. |
| `installmentOptions` | [`Record<string, InstallmentOption> \| undefined`](../../doc/models/installment-option.md) | Optional | A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br><br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty. |
| `manualCapture` | `boolean \| undefined` | Optional | Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture). |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.<br><br>**Constraints**: *Maximum Length*: `16` |
| `merchantAccount` | `string` | Required | The merchant account identifier for which the payment link is created. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.<br><br>**Constraints**: *Maximum Length*: `1000` |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limitations:<br><br>* Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"<br>* Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"<br>* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID. |
| `platformChargebackLogic` | [`PlatformChargebackLogic4 \| undefined`](../../doc/models/platform-chargeback-logic-4.md) | Optional | Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms. |
| `recurringProcessingModel` | [`RecurringProcessingModel4Enum \| undefined`](../../doc/models/recurring-processing-model-4-enum.md) | Optional | Defines a recurring payment type. Required when `storePaymentMethodMode` is set to **askForConsent** or **enabled**.<br>Possible values:<br><br>* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br><br>**Constraints**: *Maximum Length*: `50` |
| `reference` | `string` | Required | A reference that is used to uniquely identify the payment in future communications about the payment status. |
| `requiredShopperFields` | [`RequiredShopperFieldEnum[] \| undefined`](../../doc/models/required-shopper-field-enum.md) | Optional | List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).<br><br>Possible values:<br><br>* **billingAddress** – The address where to send the invoice.<br>* **deliveryAddress** – The address where the purchased goods should be delivered.<br>* **shopperEmail** – The shopper's email address.<br>* **shopperName** – The shopper's full name.<br>* **telephoneNumber** – The shopper's phone number. |
| `returnUrl` | `string \| undefined` | Optional | Website URL used for redirection after payment is completed.<br>If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.<br><br>**Constraints**: *Maximum Length*: `8000` |
| `reusable` | `boolean \| undefined` | Optional | Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only. |
| `riskData` | [`RiskData1 \| undefined`](../../doc/models/risk-data-1.md) | Optional | Any risk-related settings to apply to the payment. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address.<br><br>**Constraints**: *Maximum Length*: `500` |
| `shopperLocale` | `string \| undefined` | Optional | The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.<br><br>For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).<br><br>**Constraints**: *Maximum Length*: `32` |
| `shopperName` | [`Name4 \| undefined`](../../doc/models/name-4.md) | Optional | The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `256` |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `showRemovePaymentMethodButton` | `boolean \| undefined` | Optional | Set to **false** to hide the button that lets the shopper remove a stored payment method.<br><br>**Default**: `true` |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number.<br><br>**Constraints**: *Maximum Length*: `32` |
| `splitCardFundingSources` | `boolean \| undefined` | Optional | Boolean value indicating whether the card payment method should be split into separate debit and credit options.<br><br>**Default**: `false` |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split). |
| `status` | [`Status3Enum`](../../doc/models/status-3-enum.md) | Required | Status of the payment link. Possible values:<br><br>* **active**: The link can be used to make payments.<br>* **expired**: The expiry date for the payment link has passed. Shoppers can no longer use the link to make payments.<br>* **completed**: The shopper completed the payment.<br>* **paymentPending**: The shopper is in the process of making the payment. Applies to payment methods with an asynchronous flow. |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed. |
| `storePaymentMethodMode` | [`StorePaymentMethodMode2Enum \| undefined`](../../doc/models/store-payment-method-mode-2-enum.md) | Optional | Indicates if the details of the payment method will be stored for the shopper. Possible values:<br><br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.<br>  When set to **askForConsent** or **enabled**, you must also include the `recurringProcessingModel` parameter. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number.<br>The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br><br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.<br><br>**Constraints**: *Maximum Length*: `32` |
| `themeId` | `string \| undefined` | Optional | A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area. |
| `threeDS2RequestData` | [`CheckoutSessionThreeDS2RequestData3 \| undefined`](../../doc/models/checkout-session-three-ds-2-request-data-3.md) | Optional | The cardholder phone number need to be part of the authentication message for payment data. It is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024. |
| `updatedAt` | `string \| undefined` | Optional | The date when the payment link status was updated.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `url` | `string` | Required, Read-only | The URL at which the shopper can complete the payment. |

## Example

```ts
import { PaymentLinkResponse, Status3Enum } from 'adyen';

const paymentLinkResponse: PaymentLinkResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  id: '',
  merchantAccount: 'merchantAccount8',
  reference: 'reference8',
  status: Status3Enum.Paid,
  url: '',
  allowedPaymentMethods: [
    'allowedPaymentMethods1',
    'allowedPaymentMethods2'
  ],
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
  billingAddress: {
    city: 'city8',
    country: 'country6',
    houseNumberOrName: 'houseNumberOrName0',
    postalCode: 'postalCode6',
    street: 'street2',
    stateOrProvince: 'stateOrProvince0',
  },
  blockedPaymentMethods: [
    'blockedPaymentMethods0',
    'blockedPaymentMethods9'
  ],
  captureDelayHours: 114,
  showRemovePaymentMethodButton: true,
  splitCardFundingSources: false,
};
```


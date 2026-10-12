import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount18Schema, type Amount18 } from "./amount18.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { authenticationData1Schema, type AuthenticationData1 } from "./authentication-data1.js";
import { billingAddress1Schema, type BillingAddress1 } from "./billing-address1.js";
import { channelSchema, type Channel } from "./channel.js";
import {
  checkoutSessionInstallmentOptionSchema,
  type CheckoutSessionInstallmentOption,
} from "./checkout-session-installment-option.js";
import {
  checkoutSessionThreeDs2RequestData1Schema,
  type CheckoutSessionThreeDs2RequestData1,
} from "./checkout-session-three-ds2-request-data1.js";
import { company1Schema, type Company1 } from "./company1.js";
import { deliveryAddress1Schema, type DeliveryAddress1 } from "./delivery-address1.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { Mode, modeSchema } from "./mode.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModel1Schema,
  type RecurringProcessingModel1,
} from "./recurring-processing-model1.js";
import { riskData1Schema, type RiskData1 } from "./risk-data1.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { shopperName1Schema, type ShopperName1 } from "./shopper-name1.js";
import { splitSchema, type Split } from "./split.js";
import { storeFiltrationModeSchema, type StoreFiltrationMode } from "./store-filtration-mode.js";
import { storePaymentMethodModeSchema, type StorePaymentMethodMode } from "./store-payment-method-mode.js";
import {
  thirdPartyTokenRedundancyInfo1Schema,
  type ThirdPartyTokenRedundancyInfo1,
} from "./third-party-token-redundancy-info1.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type CreateCheckoutSessionResponse = {
  /**
   * Shopper account information for 3D Secure 2. > For 3D Secure 2 transactions, we recommend that
   * you include this object to increase the chances of achieving a frictionless flow.
   */
  accountInfo?: AccountInfo;
  /**
   * If you want a [BIN or card
   * verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification)
   * request to use a non-zero value, assign this value to `additionalAmount` (while the amount must
   * be still set to 0 to trigger BIN or card verification). Required to be in the same currency as
   * the `amount`.
   */
  additionalAmount?: Amount1;
  /**
   * This field contains additional data, which may be required for a particular payment request.
   *
   * The `additionalData` object consists of entries, each of which includes the key and value.
   */
  additionalData?: Record<string, string>;
  /**
   * List of payment methods to be presented to the shopper. To refer to payment methods, use their
   * [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).
   *
   * Example: `"allowedPaymentMethods":["ideal","applepay"]`
   */
  allowedPaymentMethods?: string[];
  /** The amount of the payment. */
  amount: Amount18;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /** Configuration data for 3DS payments. */
  authenticationData?: AuthenticationData1;
  /** The address where to send the invoice. */
  billingAddress?: BillingAddress1;
  /**
   * List of payment methods to be hidden from the shopper. To refer to payment methods, use their
   * [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).
   *
   * Example: `"blockedPaymentMethods":["ideal","applepay"]`
   */
  blockedPaymentMethods?: string[];
  /** The delay between the authorisation and scheduled auto-capture, specified in hours. */
  captureDelayHours?: number;
  /**
   * The platform where a payment transaction takes place. This field is optional for filtering out
   * payment methods that are only available on specific platforms. If this value is not set, then
   * we will try to infer it from the `sdkVersion` or `token`.
   *
   * Possible values:
   * * **iOS**
   * * **Android**
   * * **Web**
   */
  channel?: Channel;
  /** Information regarding the company. */
  company?: Company1;
  /** The shopper's two-letter country code. */
  countryCode?: string;
  /**
   * The shopper's date of birth in
   * [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   */
  dateOfBirth?: Date;
  /**
   * The date and time when the purchased goods should be delivered.
   *
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example,
   * **2020-12-18T10:15:30+01:00**.
   */
  deliverAt?: Date;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: DeliveryAddress1;
  /**
   * When true and `shopperReference` is provided, the shopper will be asked if the payment details
   * should be stored for future [one-click
   * payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).
   */
  enableOneClick?: boolean;
  /**
   * When true and `shopperReference` is provided, the payment details will be tokenized for
   * payouts.
   */
  enablePayOut?: boolean;
  /**
   * When true and `shopperReference` is provided, the payment details will be stored for [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where
   * the shopper is not present, such as subscription or automatic top-up payments.
   */
  enableRecurring?: boolean;
  /**
   * The date the session expires in
   * [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified,
   * the expiry date is set to 1 hour after session creation. You cannot set the session expiry to
   * more than 24 hours after session creation.
   */
  expiresAt: Date;
  /** The person or entity funding the money. */
  fundOrigin?: FundOrigin1;
  /** the person or entity receiving the money */
  fundRecipient?: FundRecipient1;
  /** A unique identifier of the session. */
  id: string;
  /**
   * A set of key-value pairs that specifies the installment options available per payment method.
   * The key must be a payment method name in lowercase. For example, **card** to specify
   * installment options for all cards, or **visa** or **mc**. The value must be an object
   * containing the installment options.
   */
  installmentOptions?: Record<string, CheckoutSessionInstallmentOption>;
  /**
   * Price and product information about the purchased items, to be included on the invoice sent to
   * the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna,
   * Ratepay, and Riverty.
   */
  lineItems?: LineItem[];
  /** The mandate details to initiate recurring transaction. */
  mandate?: Mandate;
  /**
   * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a
   * four-digit number, which relates to a particular market segment. This code reflects the
   * predominant activity that is conducted by the merchant.
   */
  mcc?: string;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /**
   * This reference allows linking multiple transactions to each other for reporting purposes (i.e.
   * order auth-rate). The reference should be unique per billing cycle. The same merchant order
   * reference should never be reused after the first authorised attempt. If used, this field should
   * be supplied for all incoming authorisations. > We strongly recommend you send the
   * `merchantOrderReference` value to benefit from linking payment requests when authorisation
   * retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`,
   * `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
   */
  merchantOrderReference?: string;
  /**
   * Metadata consists of entries, each of which includes a key and a value. Limits:
   * * Maximum 20 key-value pairs per request.
   * * Maximum 20 characters per key.
   * * Maximum 80 characters per value.
   */
  metadata?: Record<string, string>;
  /**
   * Indicates the type of front end integration. Possible values:
   * * **embedded** (default): Drop-in or Components integration
   * * **hosted**: Hosted Checkout integration
   *
   * @default Mode.Embedded
   */
  mode?: Mode;
  /**
   * Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes
   * Bancaires).
   */
  mpiData?: ThreeDSecureData;
  /**
   * Defines how to book chargebacks when using [Adyen for
   * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
   */
  platformChargebackLogic?: PlatformChargebackLogic;
  /** Date after which no further authorisations shall be performed. Only for 3D Secure 2. */
  recurringExpiry?: string;
  /** Minimum number of days between authorisations. Only for 3D Secure 2. */
  recurringFrequency?: string;
  /**
   * Defines a recurring payment type. Required when creating a token to store payment details.
   * Allowed values:
   * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed
   *   schedule.
   * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable
   *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
   *   subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction
   *   that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic
   *   top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel?: RecurringProcessingModel1;
  /** Specifies the redirect method (GET or POST) when redirecting back from the issuer. */
  redirectFromIssuerMethod?: string;
  /** Specifies the redirect method (GET or POST) when redirecting to the issuer. */
  redirectToIssuerMethod?: string;
  /** The reference to uniquely identify a payment. */
  reference: string;
  /**
   * The URL to return to in case of a redirection. The format depends on the channel.
   * * For web, include the protocol `http://` or `https://`. You can also include your own
   *   additional query parameters, for example, shopper ID or order reference number. Example:
   *   `https://your-company.example.com/checkout?shopperOrder=12xy`
   * * For iOS, use the custom URL for your app. To know more about setting custom URL schemes,
   *   refer to the [Apple Developer
   *   documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).
   *   Example: `my-app://`
   * * For Android, use a custom URL handled by an Activity on your app. You can configure it with
   *   an [intent filter](https://developer.android.com/guide/components/intents-filters). Example:
   *   `my-app://your.package.name`
   *
   * If the URL to return to includes non-ASCII characters, like spaces or special letters, URL
   * encode the value. > The URL must not include personally identifiable information (PII), for
   * example name or email address.
   */
  returnUrl: string;
  /** Any risk-related settings to apply to the payment. */
  riskData?: RiskData1;
  /** The payment session data you need to pass to your front end. */
  sessionData?: string;
  /** The shopper's email address. */
  shopperEmail?: string;
  /**
   * The shopper's IP address. We recommend that you provide this data, as it is used in a number of
   * risk checks (for instance, number of payment attempts or location-based checks). > Required for
   * Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile
   * integrations, if you did not include the `shopperEmail`. For native mobile integrations, the
   * field is required to support cases where authentication is routed to the redirect flow. This
   * field is also mandatory for some merchants depending on your business model. For more
   * information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).
   */
  shopperIp?: string;
  /**
   * Specifies the sales channel, through which the shopper gives their card details, and whether
   * the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper
   * interaction by default.
   *
   * This field has the following possible values:
   * * `Ecommerce` - Online transactions where the cardholder is present (online). For better
   *   authorisation rates, we recommend sending the card security code (CSC) along with the
   *   request.
   * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to
   *   the merchant (returning customer). If the shopper is present (online), you can supply also
   *   the CSC to improve authorisation (one-click payment).
   * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the
   *   merchant via email or telephone.
   * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment
   *   using a secure payment terminal.
   */
  shopperInteraction?: ShopperInteraction;
  /**
   * The language for the payment. The value combines the two-letter [ISO
   * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the
   * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country
   * code. For example, **nl-NL**.
   *
   * When using Drop-in/Components, the specified language appears if your front-end global
   * configuration does not set the `locale`.
   */
  shopperLocale?: string;
  /**
   * The shopper's full name. This object is required for some payment methods such as AfterPay,
   * Klarna, or if you're enrolled in the PayPal Seller Protection program.
   */
  shopperName?: ShopperName1;
  /**
   * Your reference to uniquely identify this shopper, for example user ID or account ID. The value
   * is case-sensitive and must be at least three characters. > Your reference must not include
   * personally identifiable information (PII) such as name or email address.
   */
  shopperReference?: string;
  /**
   * The text to be shown on the shopper's bank statement. We recommend sending a maximum of 22
   * characters, otherwise banks might truncate the string. Allowed characters: **a-z**, **A-Z**,
   * **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  shopperStatement?: string;
  /** Set to true to show the payment amount per installment. */
  showInstallmentAmount?: boolean;
  /** Set to **true** to show a button that lets the shopper remove a stored payment method. */
  showRemovePaymentMethodButton?: boolean;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
  /**
   * Boolean value indicating whether the card payment method should be split into separate debit
   * and credit options.
   *
   * @default false
   */
  splitCardFundingSources?: boolean;
  /**
   * An array of objects specifying how to split a payment when using [Adyen for
   * Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information),
   * [Classic Platforms
   * integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information),
   * or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
   */
  splits?: Split[];
  /**
   * Required for Adyen for Platforms integrations if you are a platform model. This is your
   * [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference)
   * (on [balance platform](https://docs.adyen.com/platforms)) or the
   * [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference)
   * (in the [classic
   * integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store))
   * for the ecommerce or point-of-sale store that is processing the payment.
   */
  store?: string;
  /**
   * Specifies how payment methods should be filtered based on the 'store' parameter:
   *   - 'exclusive': Only payment methods belonging to the specified 'store' are returned.
   *   - 'inclusive': Payment methods from the 'store' and those not associated with any other store
   *     are returned.
   */
  storeFiltrationMode?: StoreFiltrationMode;
  /**
   * When true and `shopperReference` is provided, the payment details will be stored for future
   * [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).
   */
  storePaymentMethod?: boolean;
  /**
   * Indicates if the details of the payment method will be stored for the shopper. Possible values:
   * * **disabled** – No details will be stored (default).
   * * **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a
   *   checkbox where the shopper can select to store their payment details for card payments.
   * * **enabled** – If the `shopperReference` is provided, the details will be stored without
   *   asking the shopper for consent.
   */
  storePaymentMethodMode?: StorePaymentMethodMode;
  /**
   * The shopper's telephone number. The phone number must include a plus sign (+) and a country
   * code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not
   * follow the guidelines, we do not submit it for authentication. > Required for Visa and JCB
   * transactions that require 3D Secure 2 authentication, if you did not include the
   * `shopperEmail`.
   */
  telephoneNumber?: string;
  /**
   * Sets a custom theme for [Hosted
   * Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout).
   * The value can be any of the **Theme ID** values from your Customer Area.
   */
  themeId?: string;
  /**
   * Configuration for creating redundant payment tokens with third-party token vaults using the
   * Adyen Forward API. This feature requires Forward API webhook integration and pre-configured
   * templates in your Adyen account. Contact your Adyen account manager for setup and availability.
   */
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo1;
  /**
   * Request fields for 3D Secure 2. To check if any of the following fields are required for your
   * integration, refer to [Online payments](https://docs.adyen.com/online-payments).
   */
  threeDs2RequestData?: CheckoutSessionThreeDs2RequestData1;
  /**
   * Required to trigger the [authentication-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to
   * **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the
   * payment authorization.Default: **false**.
   *
   * @deprecated
   *
   * @default false
   */
  threeDsAuthenticationOnly?: boolean;
  /** Set to true if the payment should be routed to a trusted MID. */
  trustedShopper?: boolean;
  /**
   * The URL for the Hosted Checkout page. Redirect the shopper to this URL so they can make the
   * payment.
   */
  url?: string;
};

export const createCheckoutSessionResponseSchema: Schema<CreateCheckoutSessionResponse> =
  s.object<CreateCheckoutSessionResponse>({
    accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
    additionalAmount: s.optional(s.lazy(() => amount1Schema)),
    additionalData: s.optional(s.record(s.string(), s.string())),
    allowedPaymentMethods: s.optional(s.array(s.string())),
    amount: amount18Schema,
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    authenticationData: s.optional(s.lazy(() => authenticationData1Schema)),
    billingAddress: s.optional(s.lazy(() => billingAddress1Schema)),
    blockedPaymentMethods: s.optional(s.array(s.string())),
    captureDelayHours: s.optional(s.int()),
    channel: s.optional(s.lazy(() => channelSchema)),
    company: s.optional(s.lazy(() => company1Schema)),
    countryCode: s.optional(s.string()),
    dateOfBirth: s.optional(s.dateTime()),
    deliverAt: s.optional(s.dateTime()),
    deliveryAddress: s.optional(s.lazy(() => deliveryAddress1Schema)),
    enableOneClick: s.optional(s.boolean()),
    enablePayOut: s.optional(s.boolean()),
    enableRecurring: s.optional(s.boolean()),
    expiresAt: s.dateTime(),
    fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
    fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
    id: s.string(),
    installmentOptions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => checkoutSessionInstallmentOptionSchema),
      ),
    ),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    mandate: s.optional(s.lazy(() => mandateSchema)),
    mcc: s.optional(s.string()),
    merchantAccount: s.string(),
    merchantOrderReference: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    mode: s.defaulted(modeSchema, Mode.Embedded),
    mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
    platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
    recurringExpiry: s.optional(s.string()),
    recurringFrequency: s.optional(s.string()),
    recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModel1Schema)),
    redirectFromIssuerMethod: s.optional(s.string()),
    redirectToIssuerMethod: s.optional(s.string()),
    reference: s.string(),
    returnUrl: s.string(),
    riskData: s.optional(s.lazy(() => riskData1Schema)),
    sessionData: s.optional(s.string()),
    shopperEmail: s.optional(s.string()),
    shopperIp: s.optional(s.string()),
    shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
    shopperLocale: s.optional(s.string()),
    shopperName: s.optional(s.lazy(() => shopperName1Schema)),
    shopperReference: s.optional(s.string()),
    shopperStatement: s.optional(s.string()),
    showInstallmentAmount: s.optional(s.boolean()),
    showRemovePaymentMethodButton: s.optional(s.boolean()),
    socialSecurityNumber: s.optional(s.string()),
    splitCardFundingSources: s.defaulted(s.boolean(), false),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
    store: s.optional(s.string()),
    storeFiltrationMode: s.optional(s.lazy(() => storeFiltrationModeSchema)),
    storePaymentMethod: s.optional(s.boolean()),
    storePaymentMethodMode: s.optional(s.lazy(() => storePaymentMethodModeSchema)),
    telephoneNumber: s.optional(s.string()),
    themeId: s.optional(s.string()),
    thirdPartyTokenRedundancyInfo: s.optional(s.lazy(() => thirdPartyTokenRedundancyInfo1Schema)),
    threeDs2RequestData: s.optional(s.lazy(() => checkoutSessionThreeDs2RequestData1Schema)),
    threeDsAuthenticationOnly: s.defaulted(s.boolean(), false),
    trustedShopper: s.optional(s.boolean()),
    url: s.optional(s.string()),
    _keysMap: {
      shopperIp: "shopperIP",
      threeDs2RequestData: "threeDS2RequestData",
      threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
    },
  });

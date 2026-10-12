import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { authenticationData3Schema, type AuthenticationData3 } from "./authentication-data3.js";
import { billingAddress3Schema, type BillingAddress3 } from "./billing-address3.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { channel2Schema, type Channel2 } from "./channel2.js";
import { checkoutBankAccount1Schema, type CheckoutBankAccount1 } from "./checkout-bank-account1.js";
import { company1Schema, type Company1 } from "./company1.js";
import { deliveryAddress1Schema, type DeliveryAddress1 } from "./delivery-address1.js";
import { encryptedOrderData2Schema, type EncryptedOrderData2 } from "./encrypted-order-data2.js";
import { enhancedSchemeData3Schema, type EnhancedSchemeData3 } from "./enhanced-scheme-data3.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { forexQuote2Schema, type ForexQuote2 } from "./forex-quote2.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { merchantRiskIndicator1Schema, type MerchantRiskIndicator1 } from "./merchant-risk-indicator1.js";
import { paymentValidations2Schema, type PaymentValidations2 } from "./payment-validations2.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { riskData4Schema, type RiskData4 } from "./risk-data4.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { shopperName2Schema, type ShopperName2 } from "./shopper-name2.js";
import { shopperTaxInfo2Schema, type ShopperTaxInfo2 } from "./shopper-tax-info2.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";
import { surcharge2Schema, type Surcharge2 } from "./surcharge2.js";
import {
  thirdPartyTokenRedundancyInfo1Schema,
  type ThirdPartyTokenRedundancyInfo1,
} from "./third-party-token-redundancy-info1.js";
import { threeDs2RequestFields1Schema, type ThreeDs2RequestFields1 } from "./three-ds2-request-fields1.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";
import { paymentMethod11Schema, type PaymentMethod11 } from "./unions/payment-method11.js";

export type PaymentRequest = {
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
   * The amount information for the transaction (in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card
   * verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification)
   * requests, set amount to 0 (zero).
   */
  amount: Amount2;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /** Data for 3DS authentication. */
  authenticationData?: AuthenticationData3;
  /**
   * The details of the bank account, from which the payment should be made. > Either `bankAccount`
   * or `card` field must be provided in a payment request.
   */
  bankAccount?: CheckoutBankAccount1;
  /**
   * The address where to send the invoice. > The `billingAddress` object is required in the
   * following scenarios. Include all of the fields within this object. >* For 3D Secure 2
   * transactions in all browser-based and mobile implementations. >* For cross-border payouts to
   * and from Canada.
   */
  billingAddress?: BillingAddress3;
  /**
   * The shopper's browser information. > For 3D Secure, the full object is required for web
   * integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to
   * indicate that your integration can support a redirect in case a payment is routed to 3D Secure
   * 2 redirect.
   */
  browserInfo?: BrowserInfo;
  /**
   * The [delay between the authorization and automatic
   * capture](https://docs.adyen.com/online-payments/capture?tab=delayed-individual_2#delayed-automatic-capture)
   * of the payment, specified in hours.
   *
   * Maximum value: **672** (28 days).
   */
  captureDelayHours?: number;
  /**
   * The platform where a payment transaction takes place. This field is optional for filtering out
   * payment methods that are only available on specific platforms. If this value is not set, then
   * we will try to infer it from the `sdkVersion` or `token`.
   *
   * Possible values:
   * * iOS
   * * Android
   * * Web
   */
  channel?: Channel2;
  /**
   * Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user
   * payment journey.
   */
  checkoutAttemptId?: string;
  /** Information regarding the company. */
  company?: Company1;
  /**
   * The shopper country code.
   *
   * Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or
   * DE
   */
  countryCode?: string;
  /**
   * The shopper's date of birth.
   *
   * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
   */
  dateOfBirth?: Date;
  /** The forex quote as returned in the response of the forex service. */
  dccQuote?: ForexQuote2;
  /**
   * The date and time the purchased goods should be delivered.
   *
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
   *
   * Example: 2017-07-17T13:42:40.428+01:00
   */
  deliverAt?: Date;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: DeliveryAddress1;
  /**
   * The date and time the purchased goods should be delivered.
   *
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
   *
   * Example: 2017-07-17T13:42:40.428+01:00
   *
   * @deprecated
   */
  deliveryDate?: Date;
  /**
   * A string containing the shopper's device fingerprint. For more information, refer to [Device
   * fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
   */
  deviceFingerprint?: string;
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
   * [Enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/) that
   * may be required for processing the payment and/or interchange savings can apply.
   */
  enhancedSchemeData?: EnhancedSchemeData3;
  /** The type of the entity the payment is processed for. */
  entityType?: EntityType;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /** The person or entity funding the money. */
  fundOrigin?: FundOrigin1;
  /** the person or entity receiving the money */
  fundRecipient?: FundRecipient1;
  /**
   * The reason for the amount update. Possible values:
   * * **delayedCharge**
   * * **noShow**
   * * **installment**
   */
  industryUsage?: IndustryUsage1;
  /**
   * Contains installment settings. For more information, refer to
   * [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
   */
  installments?: Installments;
  /**
   * Price and product information about the purchased items, to be included on the invoice sent to
   * the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna,
   * Ratepay, and Riverty.
   */
  lineItems?: LineItem[];
  /**
   * The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in
   * a local character set. If this parameter is left empty, not provided, or not applicable (in
   * case of cross-border transactions), then **shopperStatement** is used.
   *
   * Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard,
   * JCB, Diners, and Discover.
   *
   * **Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.
   */
  localizedShopperStatement?: Record<string, string>;
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
   * You can use this reference to link multiple transactions to one another (for example, to track
   * order authorization rate).For each billing cycle, this reference should be unique. After the
   * first authorized payment attempt, do not reuse the reference. If you use this parameter,
   * include it in all of the payment requests that you make. We strongly recommend that you:
   * * Always include this parameter, so that you can benefit from linking payment requests to one
   *   another, in case of authorization retries.
   * * Additionally include the following parameters in the `additionalData` object:
   *   [`retry.orderAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-orderAttemptNumber),
   *   [`retry.chainAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-chainAttemptNumber),
   *   and
   *   [`retry.skipRetry`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-skipRetry)
   */
  merchantOrderReference?: string;
  /**
   * Additional risk fields for 3D Secure 2. > For 3D Secure 2 transactions, we recommend that you
   * include this object to increase the chances of achieving a frictionless flow.
   */
  merchantRiskIndicator?: MerchantRiskIndicator1;
  /**
   * Metadata consists of entries, each of which includes a key and a value. Limits:
   * * Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata
   *   size exceeds limit".
   * * Maximum 20 characters per key.
   * * Maximum 80 characters per value.
   */
  metadata?: Record<string, string>;
  /**
   * Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes
   * Bancaires).
   */
  mpiData?: ThreeDSecureData;
  /** The order information required for partial payments. */
  order?: EncryptedOrderData2;
  /**
   * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the
   * first payment. We use this to link the multiple payments to each other. As your own reference
   * for linking multiple payments, use the `merchantOrderReference`instead.
   */
  orderReference?: string;
  /**
   * > Required for browser-based (`channel` **Web**) 3D Secure 2 transactions.Set this to the
   * origin URL of the page where you are rendering the Drop-in/Component. Do not include
   * subdirectories and a trailing slash.
   */
  origin?: string;
  /** The type and required details of a payment method to use. */
  paymentMethod: PaymentMethod11;
  /** The object that you can use to enable payment validations for a transaction. */
  paymentValidations?: PaymentValidations2;
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
   * Defines a recurring payment type. Required when creating a token to store payment details or
   * using stored payment details. Allowed values:
   * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed
   *   schedule.
   * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable
   *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
   *   subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction
   *   that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic
   *   top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel?: RecurringProcessingModel;
  /** Specifies the redirect method (GET or POST) when redirecting back from the issuer. */
  redirectFromIssuerMethod?: string;
  /** Specifies the redirect method (GET or POST) when redirecting to the issuer. */
  redirectToIssuerMethod?: string;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. To provide multiple references for one transaction, separate the
   * reference values with the hyphen (`-`) character.We strongly recommend that you use a unique
   * value for each transaction. Maximum length: 80 characters.
   */
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
  /** Contains risk data, such as client-side data, used to identify risk for a transaction. */
  riskData?: RiskData4;
  /**
   * The date and time until when the session remains valid, in [ISO
   * 8601](https://www.w3.org/TR/NOTE-datetime) format.
   *
   * For example: 2020-07-18T15:42:40.428+01:00
   */
  sessionValidity?: string;
  /**
   * A unique ID to [connect the shopper to a single checkout
   * session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id)
   * that uses multiple API requests. You can use this to get insights into conversion rates.
   */
  shopperConversionId?: string;
  /**
   * The shopper's email address, in valid [RFC-5322](https://www.rfc-editor.org/rfc/rfc5322)
   * format. We recommend that you provide this data, because it is used in velocity fraud checks. >
   * Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not
   * include the `telephoneNumber`.
   */
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
  /** The shopper's full name. */
  shopperName?: ShopperName2;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. Minimum length: 3 characters. > Your reference must not include
   * personally identifiable information (PII), for example name or email address.
   */
  shopperReference?: string;
  /**
   * The text to be shown on the shopper's bank statement. We recommend sending a maximum of 22
   * characters, otherwise banks might truncate the string. Allowed characters: **a-z**, **A-Z**,
   * **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  shopperStatement?: string;
  /** The tax info of the shopper */
  shopperTaxInfo?: ShopperTaxInfo2;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
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
   * When true and `shopperReference` is provided, the payment details will be stored for future
   * [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).
   */
  storePaymentMethod?: boolean;
  /**
   * This field contains additional information on the submerchant, who is onboarded to an acquirer
   * through a payment facilitator or aggregator
   */
  subMerchants?: SubMerchantInfo[];
  /**
   * The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the
   * transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * When you apply surcharge, include the surcharge in the `amount.value` field.
   *
   * Review our [Surcharge compliance
   * guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how
   * to comply with regulatory requirements when applying surcharge.
   */
  surcharge?: Surcharge2;
  /**
   * The shopper's telephone number. The phone number must include a plus sign (+) and a country
   * code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not
   * follow the guidelines, we do not submit it for authentication. > Required for Visa and JCB
   * transactions that require 3D Secure 2 authentication, if you did not include the
   * `shopperEmail`.
   */
  telephoneNumber?: string;
  /**
   * Configuration for creating redundant payment tokens with third-party token vaults using the
   * Adyen Forward API. This feature requires Forward API webhook integration and pre-configured
   * templates in your Adyen account. Contact your Adyen account manager for setup and availability.
   */
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo1;
  /**
   * Request fields for 3D Secure 2. To check if any of the following fields are required for your
   * integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic
   * integration](https://docs.adyen.com/classic-integration) documentation.
   */
  threeDs2RequestData?: ThreeDs2RequestFields1;
  /**
   * Required to trigger the [authentication-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to
   * **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the
   * payment authorisation.Default: **false**.
   *
   * @deprecated
   *
   * @default false
   */
  threeDsAuthenticationOnly?: boolean;
  /** Set to true if the payment should be routed to a trusted MID. */
  trustedShopper?: boolean;
};

export const paymentRequestSchema: Schema<PaymentRequest> = s.object<PaymentRequest>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amount1Schema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amount2Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  authenticationData: s.optional(s.lazy(() => authenticationData3Schema)),
  bankAccount: s.optional(s.lazy(() => checkoutBankAccount1Schema)),
  billingAddress: s.optional(s.lazy(() => billingAddress3Schema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.int()),
  channel: s.optional(s.lazy(() => channel2Schema)),
  checkoutAttemptId: s.optional(s.string()),
  company: s.optional(s.lazy(() => company1Schema)),
  countryCode: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateTime()),
  dccQuote: s.optional(s.lazy(() => forexQuote2Schema)),
  deliverAt: s.optional(s.dateTime()),
  deliveryAddress: s.optional(s.lazy(() => deliveryAddress1Schema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  enableOneClick: s.optional(s.boolean()),
  enablePayOut: s.optional(s.boolean()),
  enableRecurring: s.optional(s.boolean()),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData3Schema)),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  fraudOffset: s.optional(s.int()),
  fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
  fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
  industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mandate: s.optional(s.lazy(() => mandateSchema)),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator1Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  order: s.optional(s.lazy(() => encryptedOrderData2Schema)),
  orderReference: s.optional(s.string()),
  origin: s.optional(s.string()),
  paymentMethod: paymentMethod11Schema,
  paymentValidations: s.optional(s.lazy(() => paymentValidations2Schema)),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  recurringExpiry: s.optional(s.string()),
  recurringFrequency: s.optional(s.string()),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  redirectFromIssuerMethod: s.optional(s.string()),
  redirectToIssuerMethod: s.optional(s.string()),
  reference: s.string(),
  returnUrl: s.string(),
  riskData: s.optional(s.lazy(() => riskData4Schema)),
  sessionValidity: s.optional(s.string()),
  shopperConversionId: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => shopperName2Schema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  shopperTaxInfo: s.optional(s.lazy(() => shopperTaxInfo2Schema)),
  socialSecurityNumber: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  storePaymentMethod: s.optional(s.boolean()),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
  surcharge: s.optional(s.lazy(() => surcharge2Schema)),
  telephoneNumber: s.optional(s.string()),
  thirdPartyTokenRedundancyInfo: s.optional(s.lazy(() => thirdPartyTokenRedundancyInfo1Schema)),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestFields1Schema)),
  threeDsAuthenticationOnly: s.defaulted(s.boolean(), false),
  trustedShopper: s.optional(s.boolean()),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});

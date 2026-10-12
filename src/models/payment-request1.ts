import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { bankAccount1Schema, type BankAccount1 } from "./bank-account1.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { card3Schema, type Card3 } from "./card3.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { forexQuote11Schema, type ForexQuote11 } from "./forex-quote11.js";
import { fundDestination1Schema, type FundDestination1 } from "./fund-destination1.js";
import { fundSource1Schema, type FundSource1 } from "./fund-source1.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { merchantRiskIndicator11Schema, type MerchantRiskIndicator11 } from "./merchant-risk-indicator11.js";
import { nameSchema, type Name } from "./name.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import {
  secureRemoteCommerceCheckoutData2Schema,
  type SecureRemoteCommerceCheckoutData2,
} from "./secure-remote-commerce-checkout-data2.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { splitSchema, type Split } from "./split.js";
import { threeDs2RequestData11Schema, type ThreeDs2RequestData11 } from "./three-ds2-request-data11.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type PaymentRequest1 = {
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
  additionalAmount?: Amount;
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
  amount: Amount;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /**
   * The details of the bank account, from which the payment should be made. > Either `bankAccount`
   * or `card` field must be provided in a payment request.
   */
  bankAccount?: BankAccount1;
  /**
   * The address where to send the invoice. > The `billingAddress` object is required in the
   * following scenarios. Include all of the fields within this object. >* For 3D Secure 2
   * transactions in all browser-based and mobile implementations. >* For cross-border payouts to
   * and from Canada.
   */
  billingAddress?: Address;
  /**
   * The shopper's browser information. > For 3D Secure, the full object is required for web
   * integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to
   * indicate that your integration can support a redirect in case a payment is routed to 3D Secure
   * 2 redirect.
   */
  browserInfo?: BrowserInfo;
  /** The delay between the authorisation and scheduled auto-capture, specified in hours. */
  captureDelayHours?: number;
  /**
   * A container for card data. > Either `bankAccount` or `card` field must be provided in a payment
   * request.
   */
  card?: Card3;
  /**
   * The shopper's date of birth.
   *
   * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
   */
  dateOfBirth?: string;
  /** The forex quote as returned in the response of the forex service. */
  dccQuote?: ForexQuote11;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: Address;
  /**
   * The date and time the purchased goods should be delivered.
   *
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
   *
   * Example: 2017-07-17T13:42:40.428+01:00
   */
  deliveryDate?: Date;
  /**
   * A string containing the shopper's device fingerprint. For more information, refer to [Device
   * fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
   */
  deviceFingerprint?: string;
  /** The type of the entity the payment is processed for. */
  entityType?: EntityType;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /** the person or entity receiving the money */
  fundDestination?: FundDestination1;
  /** The person or entity funding the money. */
  fundSource?: FundSource1;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
  /**
   * Contains installment settings. For more information, refer to
   * [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
   */
  installments?: Installments;
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
   * Additional risk fields for 3D Secure 2. > For 3D Secure 2 transactions, we recommend that you
   * include this object to increase the chances of achieving a frictionless flow.
   */
  merchantRiskIndicator?: MerchantRiskIndicator11;
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
  /** The two-character country code of the shopper's nationality. */
  nationality?: string;
  /**
   * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the
   * first payment. We use this to link the multiple payments to each other. As your own reference
   * for linking multiple payments, use the `merchantOrderReference`instead.
   */
  orderReference?: string;
  /**
   * Defines how to book chargebacks when using [Adyen for
   * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
   */
  platformChargebackLogic?: PlatformChargebackLogic;
  /**
   * The recurring settings for the payment. Use this property when you want to enable [recurring
   * payments](https://docs.adyen.com/classic-integration/recurring-payments).
   */
  recurring?: Recurring;
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
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. We recommend using a unique value per payment; however, it is not
   * a requirement. If you need to provide multiple references for a transaction, separate them with
   * hyphens ("-"). Maximum length: 80 characters.
   */
  reference: string;
  /** Checkout data for a Secure Remote Commerce payment. */
  secureRemoteCommerceCheckoutData?: SecureRemoteCommerceCheckoutData2;
  /**
   * Some payment methods require defining a value for this field to specify how to process the
   * transaction.
   *
   * For the Bancontact payment method, it can be set to:
   * * `maestro` (default), to be processed like a Maestro card, or
   * * `bcmc`, to be processed like a Bancontact card.
   */
  selectedBrand?: string;
  /**
   * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used
   * to select the most recently stored recurring detail.
   */
  selectedRecurringDetailReference?: string;
  /** A session ID used to identify a payment session. */
  sessionId?: string;
  /**
   * The shopper's email address. We recommend that you provide this data, as it is used in velocity
   * fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication
   * if you did not include the `telephoneNumber`.
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
  shopperName?: Name;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. The value is case-sensitive and must be at least three characters. >
   * Your reference must not include personally identifiable information (PII) such as name or email
   * address.
   */
  shopperReference?: string;
  /**
   * The text to be shown on the shopper's bank statement. We recommend sending a maximum of 22
   * characters, otherwise banks might truncate the string. Allowed characters: **a-z**, **A-Z**,
   * **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  shopperStatement?: string;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
  /**
   * An array of objects specifying how the payment should be split when using either Adyen for
   * Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or
   * [platforms](https://docs.adyen.com/platforms/split-payments), or standalone
   * [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).
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
   * The shopper's telephone number. The phone number must include a plus sign (+) and a country
   * code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not
   * follow the guidelines, we do not submit it for authentication. > Required for Visa and JCB
   * transactions that require 3D Secure 2 authentication, if you did not include the
   * `shopperEmail`.
   */
  telephoneNumber?: string;
  /**
   * Request fields for 3D Secure 2. To check if any of the following fields are required for your
   * integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic
   * integration](https://docs.adyen.com/classic-integration) documentation.
   */
  threeDs2RequestData?: ThreeDs2RequestData11;
  /**
   * Required to trigger the [authentication-only
   * flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to
   * **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the
   * payment authorization.Default: **false**.
   *
   * @default false
   */
  threeDsAuthenticationOnly?: boolean;
  /**
   * The reference value to aggregate sales totals in reporting. When not specified, the store field
   * is used (if available).
   */
  totalsGroup?: string;
  /** Set to true if the payment should be routed to a trusted MID. */
  trustedShopper?: boolean;
};

export const paymentRequest1Schema: Schema<PaymentRequest1> = s.object<PaymentRequest1>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amountSchema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amountSchema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  bankAccount: s.optional(s.lazy(() => bankAccount1Schema)),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.int()),
  card: s.optional(s.lazy(() => card3Schema)),
  dateOfBirth: s.optional(s.dateOnly()),
  dccQuote: s.optional(s.lazy(() => forexQuote11Schema)),
  deliveryAddress: s.optional(s.lazy(() => addressSchema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  fraudOffset: s.optional(s.int()),
  fundDestination: s.optional(s.lazy(() => fundDestination1Schema)),
  fundSource: s.optional(s.lazy(() => fundSource1Schema)),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mandate: s.optional(s.lazy(() => mandateSchema)),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator11Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  nationality: s.optional(s.string()),
  orderReference: s.optional(s.string()),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  reference: s.string(),
  secureRemoteCommerceCheckoutData: s.optional(s.lazy(() => secureRemoteCommerceCheckoutData2Schema)),
  selectedBrand: s.optional(s.string()),
  selectedRecurringDetailReference: s.optional(s.string()),
  sessionId: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestData11Schema)),
  threeDsAuthenticationOnly: s.defaulted(s.boolean(), false),
  totalsGroup: s.optional(s.string()),
  trustedShopper: s.optional(s.boolean()),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});

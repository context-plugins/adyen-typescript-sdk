import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address2Schema, type Address2 } from "./address2.js";
import { address3Schema, type Address3 } from "./address3.js";
import { amount35Schema, type Amount35 } from "./amount35.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import {
  checkoutSessionThreeDs2RequestData3Schema,
  type CheckoutSessionThreeDs2RequestData3,
} from "./checkout-session-three-ds2-request-data3.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { installmentOptionSchema, type InstallmentOption } from "./installment-option.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { name4Schema, type Name4 } from "./name4.js";
import {
  platformChargebackLogic4Schema,
  type PlatformChargebackLogic4,
} from "./platform-chargeback-logic4.js";
import {
  recurringProcessingModel4Schema,
  type RecurringProcessingModel4,
} from "./recurring-processing-model4.js";
import { requiredShopperFieldSchema, type RequiredShopperField } from "./required-shopper-field.js";
import { riskData1Schema, type RiskData1 } from "./risk-data1.js";
import { splitSchema, type Split } from "./split.js";
import { storePaymentMethodMode2Schema, type StorePaymentMethodMode2 } from "./store-payment-method-mode2.js";

export type PaymentLinkRequest = {
  /**
   * List of payment methods to be presented to the shopper. To refer to payment methods, use their
   * [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).
   *
   * Example: `"allowedPaymentMethods":["ideal","applepay"]`
   */
  allowedPaymentMethods?: string[];
  /** The payment amount and currency. */
  amount: Amount35;
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /** The address where to send the invoice. */
  billingAddress?: Address3;
  /**
   * List of payment methods to be hidden from the shopper. To refer to payment methods, use their
   * [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).
   *
   * Example: `"blockedPaymentMethods":["ideal","applepay"]`
   */
  blockedPaymentMethods?: string[];
  /** The delay between the authorisation and scheduled auto-capture, specified in hours. */
  captureDelayHours?: number;
  /** The shopper's two-letter country code. */
  countryCode?: string;
  /**
   * The shopper's date of birth.
   *
   * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
   */
  dateOfBirth?: string;
  /**
   * The date and time when the purchased goods should be delivered.
   *
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example,
   * **2020-12-18T10:15:30+01:00**.
   */
  deliverAt?: Date;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: Address2;
  /** A short description visible on the payment page. Maximum length: 280 characters. */
  description?: string;
  /**
   * The date when the payment link expires.
   *
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset:
   * YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
   *
   * The maximum expiry date is 70 days after the payment link is created.
   *
   * If not provided, the payment link expires 24 hours after it was created.
   */
  expiresAt?: Date;
  /** The person or entity funding the money. */
  fundOrigin?: FundOrigin1;
  /** the person or entity receiving the money */
  fundRecipient?: FundRecipient1;
  /**
   * A set of key-value pairs that specifies the installment options available per payment method.
   * The key must be a payment method name in lowercase. For example, **card** to specify
   * installment options for all cards, or **visa** or **mc**. The value must be an object
   * containing the installment options.
   */
  installmentOptions?: Record<string, InstallmentOption>;
  /**
   * Price and product information about the purchased items, to be included on the invoice sent to
   * the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna,
   * Ratepay, and Riverty.
   */
  lineItems?: LineItem[];
  /**
   * Indicates if the payment must be [captured
   * manually](https://docs.adyen.com/online-payments/capture).
   */
  manualCapture?: boolean;
  /**
   * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a
   * four-digit number, which relates to a particular market segment. This code reflects the
   * predominant activity that is conducted by the merchant.
   */
  mcc?: string;
  /** The merchant account identifier for which the payment link is created. */
  merchantAccount: string;
  /**
   * This reference allows linking multiple transactions to each other for reporting purposes (for
   * example, order auth-rate). The reference should be unique per billing cycle.
   */
  merchantOrderReference?: string;
  /**
   * Metadata consists of entries, each of which includes a key and a value. Limitations:
   * * Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds
   *   limit"
   * * Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds
   *   limit"
   * * A key cannot have the name `checkout.linkId`. Any value that you provide with this key is
   *   going to be replaced by the real payment link ID.
   */
  metadata?: Record<string, string>;
  /**
   * Dictates the behavior of how a potential chargeback should be booked when using Adyen
   * Platforms.
   */
  platformChargebackLogic?: PlatformChargebackLogic4;
  /**
   * Defines a recurring payment type. Required when `storePaymentMethodMode` is set to
   * **askForConsent** or **enabled**. Possible values:
   * * **Subscription** – A transaction for a fixed or variable amount, which follows a fixed
   *   schedule.
   * * **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable
   *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
   *   subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction
   *   that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic
   *   top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel?: RecurringProcessingModel4;
  /**
   * A reference that is used to uniquely identify the payment in future communications about the
   * payment status.
   */
  reference: string;
  /**
   * List of fields that the shopper has to provide on the payment page before completing the
   * payment. For more information, refer to [Provide shopper
   * information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).
   *
   * Possible values:
   * * **billingAddress** – The address where to send the invoice.
   * * **deliveryAddress** – The address where the purchased goods should be delivered.
   * * **shopperEmail** – The shopper's email address.
   * * **shopperName** – The shopper's full name.
   * * **telephoneNumber** – The shopper's phone number.
   */
  requiredShopperFields?: RequiredShopperField[];
  /**
   * Website URL used for redirection after payment is completed. If provided, a **Continue** button
   * will be shown on the payment page. If shoppers select the button, they are redirected to the
   * specified URL.
   */
  returnUrl?: string;
  /**
   * Indicates whether the payment link can be reused for multiple payments. If not provided, this
   * defaults to **false** which means the link can be used for one successful payment only.
   */
  reusable?: boolean;
  /** Any risk-related settings to apply to the payment. */
  riskData?: RiskData1;
  /** The shopper's email address. */
  shopperEmail?: string;
  /**
   * The language to be used in the payment page, specified by a combination of a language and
   * country code. For example, `en-US`.
   *
   * For a list of shopper locales that Pay by Link supports, refer to [Language and
   * localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).
   */
  shopperLocale?: string;
  /**
   * The shopper's full name. This object is required for some payment methods such as AfterPay,
   * Klarna, or if you're enrolled in the PayPal Seller Protection program.
   */
  shopperName?: Name4;
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
  /**
   * Set to **false** to hide the button that lets the shopper remove a stored payment method.
   *
   * @default true
   */
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
  /** The physical store, for which this payment is processed. */
  store?: string;
  /**
   * Indicates if the details of the payment method will be stored for the shopper. Possible values:
   * * **disabled** – No details will be stored (default).
   * * **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a
   *   checkbox where the shopper can select to store their payment details for card payments.
   * * **enabled** – If the `shopperReference` is provided, the details will be stored without
   *   asking the shopper for consent. When set to **askForConsent** or **enabled**, you must also
   *   include the `recurringProcessingModel` parameter.
   */
  storePaymentMethodMode?: StorePaymentMethodMode2;
  /**
   * The shopper's telephone number. The phone number must include a plus sign (+) and a country
   * code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not
   * follow the guidelines, we do not submit it for authentication. > Required for Visa and JCB
   * transactions that require 3D Secure 2 authentication, if you did not include the
   * `shopperEmail`.
   */
  telephoneNumber?: string;
  /**
   * A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to
   * customize the appearance of the payment page. If not specified, the payment page is rendered
   * according to the theme set as default in your Customer Area.
   */
  themeId?: string;
  /**
   * The cardholder phone number need to be part of the authentication message for payment data. It
   * is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024.
   */
  threeDs2RequestData?: CheckoutSessionThreeDs2RequestData3;
};

export const paymentLinkRequestSchema: Schema<PaymentLinkRequest> = s.object<PaymentLinkRequest>({
  allowedPaymentMethods: s.optional(s.array(s.string())),
  amount: amount35Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  billingAddress: s.optional(s.lazy(() => address3Schema)),
  blockedPaymentMethods: s.optional(s.array(s.string())),
  captureDelayHours: s.optional(s.int()),
  countryCode: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateOnly()),
  deliverAt: s.optional(s.dateTime()),
  deliveryAddress: s.optional(s.lazy(() => address2Schema)),
  description: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
  fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
  installmentOptions: s.optional(
    s.record(
      s.string(),
      s.lazy(() => installmentOptionSchema),
    ),
  ),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  manualCapture: s.optional(s.boolean()),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogic4Schema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModel4Schema)),
  reference: s.string(),
  requiredShopperFields: s.optional(s.array(s.lazy(() => requiredShopperFieldSchema))),
  returnUrl: s.optional(s.string()),
  reusable: s.optional(s.boolean()),
  riskData: s.optional(s.lazy(() => riskData1Schema)),
  shopperEmail: s.optional(s.string()),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => name4Schema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  showRemovePaymentMethodButton: s.defaulted(s.boolean(), true),
  socialSecurityNumber: s.optional(s.string()),
  splitCardFundingSources: s.defaulted(s.boolean(), false),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  storePaymentMethodMode: s.optional(s.lazy(() => storePaymentMethodMode2Schema)),
  telephoneNumber: s.optional(s.string()),
  themeId: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => checkoutSessionThreeDs2RequestData3Schema)),
  _keysMap: {
    threeDs2RequestData: "threeDS2RequestData",
  },
});

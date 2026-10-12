import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { Type14, type14Schema } from "./type14.js";

export type CardDetails = {
  /**
   * The sequence number for the debit. For example, send **2** if this is the second debit for the
   * subscription. The sequence number is included in the notification sent to the shopper.
   */
  billingSequenceNumber?: string;
  /** Secondary brand of the card. For example: **plastix**, **hmclub**. */
  brand?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * @deprecated
   */
  cupsecureplusSmscode?: string;
  /**
   * The card verification code. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  cvc?: string;
  /**
   * Only include this for JSON Web Encryption (JWE) implementations. The JWE-encrypted card
   * details.
   */
  encryptedCard?: string;
  /** The encrypted card number. */
  encryptedCardNumber?: string;
  /** The encrypted card expiry month. */
  encryptedExpiryMonth?: string;
  /** The encrypted card expiry year. */
  encryptedExpiryYear?: string;
  /**
   * This field contains an encrypted, one-time password or an authentication code provided by the
   * cardholder.
   */
  encryptedPassword?: string;
  /** The encrypted card verification code. */
  encryptedSecurityCode?: string;
  /**
   * The card expiry month. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  expiryMonth?: string;
  /**
   * The card expiry year. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  expiryYear?: string;
  /** The encoded fastlane data blob */
  fastlaneData?: string;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
  /** The name of the card holder. */
  holderName?: string;
  /**
   * The transaction identifier from card schemes. This is the
   * [`networkTxReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-additionalData-ResponseAdditionalDataCommon-networkTxReference)
   * from the response to the first payment.
   */
  networkPaymentReference?: string;
  /**
   * The card number. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  number?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /**
   * The `shopperNotificationReference` returned in the response when you requested to notify the
   * shopper. Used only for recurring payments in India.
   */
  shopperNotificationReference?: string;
  /** An identifier used for the Click to Pay transaction. */
  srcCorrelationId?: string;
  /** The SRC reference for the Click to Pay token. */
  srcDigitalCardId?: string;
  /** The scheme that is being used for Click to Pay. */
  srcScheme?: string;
  /** The reference for the Click to Pay token. */
  srcTokenReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** Required for mobile integrations. Version of the 3D Secure 2 mobile SDK. */
  threeDs2SdkVersion?: string;
  /**
   * Default payment method details. Common for scheme payment methods, and for simple payment
   * method details.
   *
   * @default Type14.Scheme
   */
  type?: Type14;
};

export const cardDetailsSchema: Schema<CardDetails> = s.object<CardDetails>({
  billingSequenceNumber: s.optional(s.string()),
  brand: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  cupsecureplusSmscode: s.optional(s.string()),
  cvc: s.optional(s.string()),
  encryptedCard: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  encryptedExpiryMonth: s.optional(s.string()),
  encryptedExpiryYear: s.optional(s.string()),
  encryptedPassword: s.optional(s.string()),
  encryptedSecurityCode: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  fastlaneData: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  holderName: s.optional(s.string()),
  networkPaymentReference: s.optional(s.string()),
  number: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  srcCorrelationId: s.optional(s.string()),
  srcDigitalCardId: s.optional(s.string()),
  srcScheme: s.optional(s.string()),
  srcTokenReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  threeDs2SdkVersion: s.optional(s.string()),
  type: s.defaulted(type14Schema, Type14.Scheme),
  _keysMap: {
    cupsecureplusSmscode: "cupsecureplus.smscode",
    threeDs2SdkVersion: "threeDS2SdkVersion",
  },
});

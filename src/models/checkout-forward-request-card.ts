import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type18, type18Schema } from "./type18.js";

export type CheckoutForwardRequestCard = {
  /**
   * The [card verification
   * code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid)
   * (1-20 characters). Depending on the card brand, it is also known as:
   * * CVV2/CVC2 – length: 3 digits
   * * CID – length: 4 digits
   */
  cvc?: string;
  /** The encrypted card number. */
  encryptedCardNumber?: string;
  /** The encrypted expiryMonth */
  encryptedExpiryMonth?: string;
  /** The encrypted card expiry year. */
  encryptedExpiryYear?: string;
  /** The encrypted security code. */
  encryptedSecurityCode?: string;
  /**
   * The card expiry month. Format: 2 digits, zero-padded for single digits. For example:
   * * 03 = March
   * * 11 = November
   */
  expiryMonth?: string;
  /** The card expiry year. */
  expiryYear?: string;
  /** The name of the cardholder. */
  holderName?: string;
  /**
   * The card number. Only collect raw card data if you are fully [PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). Format: Do
   * not use separators.
   */
  number?: string;
  /**
   * Default payment method details. Common for scheme payment methods, and for simple payment
   * method details.
   *
   * @default Type18.Scheme
   */
  type?: Type18;
};

export const checkoutForwardRequestCardSchema: Schema<CheckoutForwardRequestCard> =
  s.object<CheckoutForwardRequestCard>({
    cvc: s.optional(s.string()),
    encryptedCardNumber: s.optional(s.string()),
    encryptedExpiryMonth: s.optional(s.string()),
    encryptedExpiryYear: s.optional(s.string()),
    encryptedSecurityCode: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    type: s.defaulted(type18Schema, Type18.Scheme),
  });

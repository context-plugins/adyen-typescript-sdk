import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A container for card data., Credit card data.
 *
 * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided., Credit card
 * data.
 *
 * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided., A container
 * for card data. > Either `bankAccount` or `card` field must be provided in a payment request., A
 * container for card data. > This field is mandatory if `bank` is not provided.
 */
export type Card = {
  /**
   * The [card verification
   * code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid)
   * (1-20 characters). Depending on the card brand, it is known also as:
   * * CVV2/CVC2 – length: 3 digits
   * * CID – length: 4 digits > If you are using [Client-Side
   *   Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC
   *   code is present in the encrypted data. You must never post the card details to the server. >
   *   This field must be always present in a [one-click payment
   *   request](https://docs.adyen.com/classic-integration/recurring-payments). > When this value is
   *   returned in a response, it is always empty because it is not stored.
   */
  cvc?: string;
  /**
   * The card expiry month. Format: 2 digits, zero-padded for single digits. For example:
   * * 03 = March
   * * 11 = November
   */
  expiryMonth?: string;
  /** The card expiry year. Format: 4 digits. For example: 2020 */
  expiryYear?: string;
  /** The name of the cardholder, as printed on the card. */
  holderName?: string;
  /** The issue number of the card (for some UK debit cards only). */
  issueNumber?: string;
  /**
   * The card number (4-19 characters). Do not use any separators. When this value is returned in a
   * response, only the last 4 digits of the card number are returned.
   */
  number?: string;
  /** The month component of the start date (for some UK debit cards only). */
  startMonth?: string;
  /** The year component of the start date (for some UK debit cards only). */
  startYear?: string;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  cvc: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  holderName: s.optional(s.string()),
  issueNumber: s.optional(s.string()),
  number: s.optional(s.string()),
  startMonth: s.optional(s.string()),
  startYear: s.optional(s.string()),
});

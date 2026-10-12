import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoredPaymentMethod3 = {
  /** The bank account number (without separators). */
  bankAccountNumber?: string;
  /** The location id of the bank. The field value is `nil` in most cases. */
  bankLocationId?: string;
  /** The brand of the card. */
  brand?: string;
  /** The shopper’s Cash App Pay Cashtag. */
  cashtag?: string;
  /** The two-digit month when the card expires */
  expiryMonth?: string;
  /** The last two digits of the year the card expires. For example, **22** for the year 2022. */
  expiryYear?: string;
  /**
   * The token issued by an external tokenization service representing the shopper's payment method
   */
  externalToken?: string;
  /** The name of the payment method holder. */
  holderName?: string;
  /** The IBAN of the bank account. */
  iban?: string;
  /** A unique identifier of this stored payment method. */
  id?: string;
  /** The shopper’s issuer account label */
  label?: string;
  /** The last four digits of the PAN. */
  lastFour?: string;
  /** The display name of the stored payment method. */
  name?: string;
  /**
   * Returned in the response if you are not tokenizing with Adyen and are using the
   * Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
   *
   * This contains either the Mastercard Trace ID or the Visa Transaction ID.
   */
  networkTxReference?: string;
  /** The name of the bank account holder. */
  ownerName?: string;
  /** The shopper’s email address. */
  shopperEmail?: string;
  /** The supported recurring processing models for this stored payment method. */
  supportedRecurringProcessingModels?: string[];
  /** The supported shopper interactions for this stored payment method. */
  supportedShopperInteractions?: string[];
  /** The type of payment method. */
  type?: string;
};

export const storedPaymentMethod3Schema: Schema<StoredPaymentMethod3> = s.object<StoredPaymentMethod3>({
  bankAccountNumber: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  brand: s.optional(s.string()),
  cashtag: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  externalToken: s.optional(s.string()),
  holderName: s.optional(s.string()),
  iban: s.optional(s.string()),
  id: s.optional(s.string()),
  label: s.optional(s.string()),
  lastFour: s.optional(s.string()),
  name: s.optional(s.string()),
  networkTxReference: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  supportedRecurringProcessingModels: s.optional(s.array(s.string())),
  supportedShopperInteractions: s.optional(s.array(s.string())),
  type: s.optional(s.string()),
});

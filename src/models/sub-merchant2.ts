import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Required for back-to-back/purchase-driven-load transactions, where the funds are taken from the
 * shopper's stored card when the wallet balance is insufficient. The final merchant who will
 * receive the money, also known as a
 * [sub-merchant](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#submerchant).
 */
export type SubMerchant2 = {
  /**
   * The city of the sub-merchant's address.
   * * Format: Alphanumeric
   * * Maximum length: 13 characters
   */
  city?: string;
  /**
   * The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil.
   * * Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * * Fixed length: 3 characters
   */
  country?: string;
  /**
   * The sub-merchant's 4-digit Merchant Category Code (MCC).
   * * Format: Numeric
   * * Fixed length: 4 digits
   */
  mcc?: string;
  /**
   * The name of the sub-merchant. Based on scheme specifications, this value will overwrite the
   * shopper statement that will appear in the card statement.
   * * Format: Alphanumeric
   * * Maximum length: 22 characters
   */
  name?: string;
  /**
   * The tax ID of the sub-merchant.
   * * Format: Numeric
   * * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
   */
  taxId?: string;
};

export const subMerchant2Schema: Schema<SubMerchant2> = s.object<SubMerchant2>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  mcc: s.optional(s.string()),
  name: s.optional(s.string()),
  taxId: s.optional(s.string()),
});

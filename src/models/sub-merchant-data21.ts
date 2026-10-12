import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The details of the sub-merchant that you want to process transactions for.Required if you are a
 * registered payment facilitator. Do not include this parameter if you are not a payment
 * facilitator.
 */
export type SubMerchantData21 = {
  /** The city of the sub-merchant's address. */
  city?: string;
  /**
   * The country/region of the sub-merchant's address, specified as the three-letter country code in
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
   */
  country?: string;
  /**
   * The name of the sub-merchant as it should appear on the display of the mobile device during
   * transactions.
   */
  displayName: string;
  /** The email address of the sub-merchant. Required for American Express. */
  email?: string;
  /** Your unique identifier of the sub-merchant. */
  id: string;
  /**
   * The sub-merchant's four-digit Merchant Category Code (MCC). This parameter is used to correctly
   * route the transaction.
   */
  mcc: string;
  /** The name of the sub-merchant. */
  name: string;
  /** The phone number of the sub-merchant. Required for American Express. */
  phoneNumber?: string;
  /** The postal code of the sub-merchant's address, without dashes. */
  postalCode?: string;
  /** The state code of the sub-merchant's address, if applicable for the country or region. */
  state?: string;
  /** The street name and house number of the sub-merchant's address. */
  street?: string;
  /**
   * The tax ID of the sub-merchant. Required only in Brazil and for Cartes Bancaires in France. For
   * Brazil, this is the 11-digit CPF or 14-digit CNPJ. For France, this is the SIRET, with a
   * maximum of 14 digits.
   */
  taxId?: string;
};

export const subMerchantData21Schema: Schema<SubMerchantData21> = s.object<SubMerchantData21>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  displayName: s.string(),
  email: s.optional(s.string()),
  id: s.string(),
  mcc: s.string(),
  name: s.string(),
  phoneNumber: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  state: s.optional(s.string()),
  street: s.optional(s.string()),
  taxId: s.optional(s.string()),
});

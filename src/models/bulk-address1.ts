import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Overrides the shipment bulk address defined in the card configuration profile. */
export type BulkAddress1 = {
  /** The name of the city. */
  city?: string;
  /** The name of the company. */
  company?: string;
  /** The two-character ISO-3166-1 alpha-2 country code. For example, **US**. */
  country: string;
  /** The email address. */
  email?: string;
  /** The house number or name. */
  houseNumberOrName?: string;
  /**
   * The name of the street and the number of the building.
   *
   * For example: **Simon Carmiggeltstraat 6-50**.
   */
  line1?: string;
  /** Additional information about the delivery address. For example, an apartment number. */
  line2?: string;
  /** Additional information about the delivery address. */
  line3?: string;
  /** The full telephone number. */
  mobile?: string;
  /** The recipient’s name (person or contact), for example ‘John Doe’. */
  name?: string;
  /**
   * The postal code.
   *
   * Maximum length:
   *
   * * 5 digits for addresses in the US.
   *
   * * 10 characters for all other countries.
   */
  postalCode?: string;
  /**
   * The two-letter ISO 3166-2 state or province code.
   *
   * Maximum length: 2 characters for addresses in the US.
   */
  stateOrProvince?: string;
  /** The streetname of the house. */
  street?: string;
};

export const bulkAddress1Schema: Schema<BulkAddress1> = s.object<BulkAddress1>({
  city: s.optional(s.string()),
  company: s.optional(s.string()),
  country: s.string(),
  email: s.optional(s.string()),
  houseNumberOrName: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  mobile: s.optional(s.string()),
  name: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});

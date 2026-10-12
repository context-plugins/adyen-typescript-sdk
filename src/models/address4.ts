import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address4 = {
  /** The name of the city. */
  city?: string;
  /** The name of the company. */
  companyName?: string;
  /**
   * The two-letter country code, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  country?: string;
  /** The postal code. */
  postalCode?: string;
  /**
   * The state or province as defined in [ISO 3166-2](https://www.iso.org/standard/72483.html). For
   * example, **ON** for Ontario, Canada.
   *
   * Applicable for the following countries:
   * - Australia
   * - Brazil
   * - Canada
   * - India
   * - Mexico
   * - New Zealand
   * - United States
   */
  stateOrProvince?: string;
  /** The name of the street, and the house or building number. */
  streetAddress?: string;
  /** Additional address details, if any. */
  streetAddress2?: string;
};

export const address4Schema: Schema<Address4> = s.object<Address4>({
  city: s.optional(s.string()),
  companyName: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  streetAddress: s.optional(s.string()),
  streetAddress2: s.optional(s.string()),
});

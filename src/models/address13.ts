import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The residential address of the individual. */
export type Address13 = {
  /**
   * The name of the city. Required if `stateOrProvince` is provided.
   *
   * If you specify the city, you must also send `postalCode` and `street`.
   */
  city?: string;
  /**
   * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country
   * code.
   */
  country: string;
  /**
   * The postal code. Required if `stateOrProvince` and/or `city` is provided.
   *
   * When using alphanumeric postal codes, all letters must be uppercase. For example, 1234 AB or
   * SW1A 1AA.
   */
  postalCode?: string;
  /**
   * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US. Required for
   * Australia and New Zealand.
   *
   * If you specify the state or province, you must also send `city`, `postalCode`, and `street`.
   */
  stateOrProvince?: string;
  /**
   * The name of the street, and the house or building number. Required if `stateOrProvince` and/or
   * `city` is provided.
   */
  street?: string;
  /** The apartment, unit, or suite number. */
  street2?: string;
};

export const address13Schema: Schema<Address13> = s.object<Address13>({
  city: s.optional(s.string()),
  country: s.string(),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
  street2: s.optional(s.string()),
});

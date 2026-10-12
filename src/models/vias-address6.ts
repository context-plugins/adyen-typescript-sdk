import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The principal business address of the account holder. */
export type ViasAddress6 = {
  /**
   * The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or
   * `stateOrProvince` are provided.
   */
  city?: string;
  /**
   * The two-character country code of the address in ISO-3166-1 alpha-2 format. For example,
   * **NL**.
   */
  country: string;
  /** The number or name of the house. */
  houseNumberOrName?: string;
  /**
   * The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince`
   * are provided.
   *
   * Maximum length:
   *
   * * 5 digits for addresses in the US.
   *
   * * 10 characters for all other countries.
   */
  postalCode?: string;
  /**
   * The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`,
   * `city`, or `postalCode` are provided.
   *
   * Maximum length:
   *
   * * 2 characters for addresses in the US or Canada.
   *
   * * 3 characters for all other countries.
   */
  stateOrProvince?: string;
  /**
   * The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or
   * `stateOrProvince` are provided.
   */
  street?: string;
};

export const viasAddress6Schema: Schema<ViasAddress6> = s.object<ViasAddress6>({
  city: s.optional(s.string()),
  country: s.string(),
  houseNumberOrName: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});

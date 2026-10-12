import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the name and location of the merchant. */
export type NameLocation2 = {
  /** The city where the merchant is located. */
  city?: string;
  /**
   * The country where the merchant is located in [three-letter country
   * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
   */
  country?: string;
  /**
   * The home country in [three-digit country
   * code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled
   * merchants such as embassies.
   */
  countryOfOrigin?: string;
  /** The name of the merchant's shop or service. */
  name?: string;
  /** The raw data. */
  rawData?: string;
  /** The state where the merchant is located. */
  state?: string;
};

export const nameLocation2Schema: Schema<NameLocation2> = s.object<NameLocation2>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  countryOfOrigin: s.optional(s.string()),
  name: s.optional(s.string()),
  rawData: s.optional(s.string()),
  state: s.optional(s.string()),
});

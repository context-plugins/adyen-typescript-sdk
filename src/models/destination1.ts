import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The destination address information. */
export type Destination1 = {
  /**
   * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) or
   * three-letter [ISO 3166-1 alpha-3 country
   * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.
   * * Encoding: ASCII
   * * Min length: 2 characters
   * * Max length: 3 characters
   * * **additionalData key:** `enhancedSchemeData.destinationCountryCode`
   */
  countryCode?: string;
  /**
   * The postal code of the destination address.
   * * Encoding: ASCII
   * * Max length: 10 characters
   * * Must not start with a space.
   * * For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.
   * * For Canada, it must be in 6 digits format. For example, M4B 1G5.
   * * **additionalData key:** `enhancedSchemeData.destinationPostalCode`
   */
  postalCode?: string;
  /**
   * The state or province code of the destination address.
   * * Encoding: ASCII
   * * Max length: 3 characters
   * * Must not start with a space.
   * * **additionalData key:** `enhancedSchemeData.destinationStateProvinceCode`
   */
  stateOrProvince?: string;
};

export const destination1Schema: Schema<Destination1> = s.object<Destination1>({
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address of the bank account or card owner. */
export type Address12 = {
  /**
   * The name of the city.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ |** and Space.
   *
   * > Required when the `category` is **card**.
   */
  city?: string;
  /** The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**. */
  country: string;
  /**
   * The first line of the street address.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ |** and Space.
   *
   * > Required when the `category` is **card**.
   */
  line1?: string;
  /**
   * The second line of the street address.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ |** and Space.
   *
   * > Required when the `category` is **card**.
   */
  line2?: string;
  /**
   * The postal code. Maximum length:
   * * 5 digits for an address in the US.
   * * 10 characters for an address in all other countries.
   *
   * Supported characters: **[a-z] [A-Z] [0-9]** and Space.
   *
   * > Required for addresses in the US.
   */
  postalCode?: string;
  /**
   * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in
   * Canada.
   *
   * > Required for the US and Canada.
   */
  stateOrProvince?: string;
};

export const address12Schema: Schema<Address12> = s.object<Address12>({
  city: s.optional(s.string()),
  country: s.string(),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});

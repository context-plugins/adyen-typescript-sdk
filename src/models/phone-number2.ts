import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The phone number of the legal entity. */
export type PhoneNumber2 = {
  /** The full phone number, including the country code. For example, **+3112345678**. */
  number: string;
  /**
   * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country
   * code prefix of the phone number. For example, **US** or **NL**.
   *
   * The value of the `phoneCountryCode` is determined by the country code digit(s) of
   * `phone.number`
   */
  phoneCountryCode?: string;
  /**
   * The type of phone number. Possible values: **mobile**, **landline**, **sip**, **fax.**
   */
  type?: string;
};

export const phoneNumber2Schema: Schema<PhoneNumber2> = s.object<PhoneNumber2>({
  number: s.string(),
  phoneCountryCode: s.optional(s.string()),
  type: s.optional(s.string()),
});

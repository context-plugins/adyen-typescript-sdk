import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

/** The phone number of the account holder. > Required if a `fullPhoneNumber` is not provided. */
export type ViasPhoneNumber3 = {
  /**
   * The two-character country code of the phone number. >The permitted country codes are defined in
   * ISO-3166-1 alpha-2 (e.g. 'NL').
   */
  phoneCountryCode?: string;
  /** The phone number. >The inclusion of the phone number country code is not necessary. */
  phoneNumber?: string;
  /**
   * The type of the phone number. >The following values are permitted: `Landline`, `Mobile`, `SIP`,
   * `Fax`.
   */
  phoneType?: PhoneType;
};

export const viasPhoneNumber3Schema: Schema<ViasPhoneNumber3> = s.object<ViasPhoneNumber3>({
  phoneCountryCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  phoneType: s.optional(s.lazy(() => phoneTypeSchema)),
});

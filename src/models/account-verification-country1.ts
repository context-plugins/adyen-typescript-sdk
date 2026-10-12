import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The location where the third-party individual's bank account is registered. */
export const AccountVerificationCountry1 = {
  Se: "SE",
  Fi: "FI",
  No: "NO",
  Dk: "DK",
  Nl: "NL",
  It: "IT",
  De: "DE",
  At: "AT",
  Es: "ES",
  Pt: "PT",
  Fr: "FR",
  Gb: "GB",
  Be: "BE",
  Lv: "LV",
  Lt: "LT",
  Pl: "PL",
  Ee: "EE",
  Ie: "IE",
  Us: "US",
  Ca: "CA",
  Au: "AU",
} as const;
export type AccountVerificationCountry1 =
  | (typeof AccountVerificationCountry1)[keyof typeof AccountVerificationCountry1]
  | (string & {});

export const accountVerificationCountry1Schema: EnumSchema<AccountVerificationCountry1> =
  s.enumOf<AccountVerificationCountry1>(AccountVerificationCountry1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountVerificationCountry2 = {
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
export type AccountVerificationCountry2 =
  | (typeof AccountVerificationCountry2)[keyof typeof AccountVerificationCountry2]
  | (string & {});

export const accountVerificationCountry2Schema: EnumSchema<AccountVerificationCountry2> =
  s.enumOf<AccountVerificationCountry2>(AccountVerificationCountry2);

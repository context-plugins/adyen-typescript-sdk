import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentificationType11 = {
  Pan: "PAN",
  IsoTrack2: "ISOTrack2",
  BarCode: "BarCode",
  AccountNumber: "AccountNumber",
  PhoneNumber: "PhoneNumber",
} as const;
export type IdentificationType11 =
  | (typeof IdentificationType11)[keyof typeof IdentificationType11]
  | (string & {});

export const identificationType11Schema: EnumSchema<IdentificationType11> =
  s.enumOf<IdentificationType11>(IdentificationType11);

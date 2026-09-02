import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentificationType1 = {
  Pan: "PAN",
  IsoTrack2: "ISOTrack2",
  BarCode: "BarCode",
  AccountNumber: "AccountNumber",
  PhoneNumber: "PhoneNumber",
} as const;
export type IdentificationType1 =
  | (typeof IdentificationType1)[keyof typeof IdentificationType1]
  | (string & {});

export const identificationType1Schema: EnumSchema<IdentificationType1> =
  s.enumOf<IdentificationType1>(IdentificationType1);

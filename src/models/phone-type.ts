import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Sip: "SIP",
} as const;
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType] | (string & {});

export const phoneTypeSchema: EnumSchema<PhoneType> = s.enumOf<PhoneType>(PhoneType);

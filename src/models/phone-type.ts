import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the phone number. >The following values are permitted: `Landline`, `Mobile`, `SIP`,
 * `Fax`., The type of the phone number. Possible values: **Landline**, **Mobile**, **SIP**,
 * **Fax**.
 */
export const PhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Sip: "SIP",
} as const;
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType] | (string & {});

export const phoneTypeSchema: EnumSchema<PhoneType> = s.enumOf<PhoneType>(PhoneType);

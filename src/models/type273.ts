import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type273 = {
  NationalIdNumber: "nationalIdNumber",
  Passport: "passport",
  DriversLicense: "driversLicense",
  IdentityCard: "identityCard",
} as const;
export type Type273 = (typeof Type273)[keyof typeof Type273] | (string & {});

export const type273Schema: EnumSchema<Type273> = s.enumOf<Type273>(Type273);

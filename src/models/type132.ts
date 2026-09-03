import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type132 = {
  NationalIdNumber: "nationalIdNumber",
  Passport: "passport",
  DriversLicense: "driversLicense",
  IdentityCard: "identityCard",
} as const;
export type Type132 = (typeof Type132)[keyof typeof Type132] | (string & {});

export const type132Schema: EnumSchema<Type132> = s.enumOf<Type132>(Type132);

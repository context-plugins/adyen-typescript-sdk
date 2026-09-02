import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type353 = {
  Individual: "individual",
  Organization: "organization",
  SoleProprietorship: "soleProprietorship",
  Trust: "trust",
  UnincorporatedPartnership: "unincorporatedPartnership",
} as const;
export type Type353 = (typeof Type353)[keyof typeof Type353] | (string & {});

export const type353Schema: EnumSchema<Type353> = s.enumOf<Type353>(Type353);

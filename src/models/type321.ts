import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type321 = {
  Individual: "individual",
  Organization: "organization",
  SoleProprietorship: "soleProprietorship",
  Trust: "trust",
  UnincorporatedPartnership: "unincorporatedPartnership",
} as const;
export type Type321 = (typeof Type321)[keyof typeof Type321] | (string & {});

export const type321Schema: EnumSchema<Type321> = s.enumOf<Type321>(Type321);

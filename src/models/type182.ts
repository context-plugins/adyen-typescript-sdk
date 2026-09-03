import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type182 = {
  Individual: "individual",
  Organization: "organization",
  SoleProprietorship: "soleProprietorship",
  Trust: "trust",
  UnincorporatedPartnership: "unincorporatedPartnership",
} as const;
export type Type182 = (typeof Type182)[keyof typeof Type182] | (string & {});

export const type182Schema: EnumSchema<Type182> = s.enumOf<Type182>(Type182);

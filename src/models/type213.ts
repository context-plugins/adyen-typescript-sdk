import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of legal entity.
 *
 * Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
 */
export const Type213 = {
  Individual: "individual",
  Organization: "organization",
  SoleProprietorship: "soleProprietorship",
  Trust: "trust",
  UnincorporatedPartnership: "unincorporatedPartnership",
} as const;
export type Type213 = (typeof Type213)[keyof typeof Type213] | (string & {});

export const type213Schema: EnumSchema<Type213> = s.enumOf<Type213>(Type213);

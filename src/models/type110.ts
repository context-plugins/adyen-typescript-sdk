import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type110 = {
  Association: "Association",
  Partnership: "Partnership",
  SoleProprietorship: "SoleProprietorship",
  Trust: "Trust",
} as const;
export type Type110 = (typeof Type110)[keyof typeof Type110] | (string & {});

export const type110Schema: EnumSchema<Type110> = s.enumOf<Type110>(Type110);

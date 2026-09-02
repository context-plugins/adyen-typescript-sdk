import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type312 = {
  BankAccountIdentificationTypeRequirement: "bankAccountIdentificationTypeRequirement",
} as const;
export type Type312 = (typeof Type312)[keyof typeof Type312] | (string & {});

export const type312Schema: EnumSchema<Type312> = s.enumOf<Type312>(Type312);

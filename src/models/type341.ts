import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type341 = {
  IbanAccountIdentificationRequirement: "ibanAccountIdentificationRequirement",
} as const;
export type Type341 = (typeof Type341)[keyof typeof Type341] | (string & {});

export const type341Schema: EnumSchema<Type341> = s.enumOf<Type341>(Type341);

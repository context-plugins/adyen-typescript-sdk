import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type65 = {
  Riverty: "riverty",
  RivertyAccount: "riverty_account",
  RivertyInstallments: "riverty_installments",
  SepadirectdebitRiverty: "sepadirectdebit_riverty",
} as const;
export type Type65 = (typeof Type65)[keyof typeof Type65] | (string & {});

export const type65Schema: EnumSchema<Type65> = s.enumOf<Type65>(Type65);

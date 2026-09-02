import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type352 = {
  CashoutRepayment: "cashoutRepayment",
  CashoutFee: "cashoutFee",
} as const;
export type Type352 = (typeof Type352)[keyof typeof Type352] | (string & {});

export const type352Schema: EnumSchema<Type352> = s.enumOf<Type352>(Type352);

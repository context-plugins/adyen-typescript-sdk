import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type121 = {
  CashoutRepayment: "cashoutRepayment",
  CashoutFee: "cashoutFee",
} as const;
export type Type121 = (typeof Type121)[keyof typeof Type121] | (string & {});

export const type121Schema: EnumSchema<Type121> = s.enumOf<Type121>(Type121);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type361 = {
  BankAccount: "bankAccount",
  RecurringDetail: "recurringDetail",
} as const;
export type Type361 = (typeof Type361)[keyof typeof Type361] | (string & {});

export const type361Schema: EnumSchema<Type361> = s.enumOf<Type361>(Type361);

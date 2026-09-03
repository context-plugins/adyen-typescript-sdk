import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type221 = {
  BankAccount: "bankAccount",
  RecurringDetail: "recurringDetail",
} as const;
export type Type221 = (typeof Type221)[keyof typeof Type221] | (string & {});

export const type221Schema: EnumSchema<Type221> = s.enumOf<Type221>(Type221);

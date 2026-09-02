import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type351 = {
  BankAccount: "bankAccount",
  Card: "card",
} as const;
export type Type351 = (typeof Type351)[keyof typeof Type351] | (string & {});

export const type351Schema: EnumSchema<Type351> = s.enumOf<Type351>(Type351);

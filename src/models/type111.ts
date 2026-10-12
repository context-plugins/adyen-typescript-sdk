import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of payment instrument.
 *
 * Possible values: **card**, **bankAccount**.
 */
export const Type111 = {
  BankAccount: "bankAccount",
  Card: "card",
} as const;
export type Type111 = (typeof Type111)[keyof typeof Type111] | (string & {});

export const type111Schema: EnumSchema<Type111> = s.enumOf<Type111>(Type111);

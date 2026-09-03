import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type34 = {
  Klarna: "klarna",
  Klarnapayments: "klarnapayments",
  KlarnapaymentsAccount: "klarnapayments_account",
  KlarnapaymentsB2B: "klarnapayments_b2b",
  KlarnaPaynow: "klarna_paynow",
  KlarnaAccount: "klarna_account",
  KlarnaB2B: "klarna_b2b",
} as const;
export type Type34 = (typeof Type34)[keyof typeof Type34] | (string & {});

export const type34Schema: EnumSchema<Type34> = s.enumOf<Type34>(Type34);

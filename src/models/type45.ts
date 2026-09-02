import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type45 = {
  Klarna: "klarna",
  Klarnapayments: "klarnapayments",
  KlarnapaymentsAccount: "klarnapayments_account",
  KlarnapaymentsB2B: "klarnapayments_b2b",
  KlarnaPaynow: "klarna_paynow",
  KlarnaAccount: "klarna_account",
  KlarnaB2B: "klarna_b2b",
} as const;
export type Type45 = (typeof Type45)[keyof typeof Type45] | (string & {});

export const type45Schema: EnumSchema<Type45> = s.enumOf<Type45>(Type45);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancellingEntity1 = {
  Merchant: "merchant",
  Cardholder: "cardholder",
} as const;
export type CancellingEntity1 = (typeof CancellingEntity1)[keyof typeof CancellingEntity1] | (string & {});

export const cancellingEntity1Schema: EnumSchema<CancellingEntity1> =
  s.enumOf<CancellingEntity1>(CancellingEntity1);

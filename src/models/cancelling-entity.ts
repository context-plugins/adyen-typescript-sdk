import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancellingEntity = {
  Merchant: "merchant",
  Cardholder: "cardholder",
} as const;
export type CancellingEntity = (typeof CancellingEntity)[keyof typeof CancellingEntity] | (string & {});

export const cancellingEntitySchema: EnumSchema<CancellingEntity> =
  s.enumOf<CancellingEntity>(CancellingEntity);

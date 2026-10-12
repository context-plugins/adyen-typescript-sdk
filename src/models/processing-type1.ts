import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Contains information about how the payment was processed.
 *
 * Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**,
 * **purchaseWithCashback**, **recurring**, **token**.
 */
export const ProcessingType1 = {
  AtmWithdraw: "atmWithdraw",
  BalanceInquiry: "balanceInquiry",
  Ecommerce: "ecommerce",
  Moto: "moto",
  Pos: "pos",
  PurchaseWithCashback: "purchaseWithCashback",
  Recurring: "recurring",
  Token: "token",
} as const;
export type ProcessingType1 = (typeof ProcessingType1)[keyof typeof ProcessingType1] | (string & {});

export const processingType1Schema: EnumSchema<ProcessingType1> = s.enumOf<ProcessingType1>(ProcessingType1);

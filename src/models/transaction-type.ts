import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identify the type of the transaction being authenticated. */
export const TransactionType = {
  GoodsOrServicePurchase: "goodsOrServicePurchase",
  CheckAcceptance: "checkAcceptance",
  AccountFunding: "accountFunding",
  QuasiCashTransaction: "quasiCashTransaction",
  PrepaidActivationAndLoad: "prepaidActivationAndLoad",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);

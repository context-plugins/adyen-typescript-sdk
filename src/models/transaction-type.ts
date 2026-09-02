import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionType = {
  GoodsOrServicePurchase: "goodsOrServicePurchase",
  CheckAcceptance: "checkAcceptance",
  AccountFunding: "accountFunding",
  QuasiCashTransaction: "quasiCashTransaction",
  PrepaidActivationAndLoad: "prepaidActivationAndLoad",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);

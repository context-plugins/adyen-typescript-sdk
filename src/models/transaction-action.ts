import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionAction = {
  StartTransaction: "StartTransaction",
  AbortTransaction: "AbortTransaction",
} as const;
export type TransactionAction = (typeof TransactionAction)[keyof typeof TransactionAction] | (string & {});

export const transactionActionSchema: EnumSchema<TransactionAction> =
  s.enumOf<TransactionAction>(TransactionAction);

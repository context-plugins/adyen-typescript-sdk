import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionAction1 = {
  StartTransaction: "StartTransaction",
  AbortTransaction: "AbortTransaction",
} as const;
export type TransactionAction1 = (typeof TransactionAction1)[keyof typeof TransactionAction1] | (string & {});

export const transactionAction1Schema: EnumSchema<TransactionAction1> =
  s.enumOf<TransactionAction1>(TransactionAction1);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionType11Schema, type TransactionType11 } from "./transaction-type11.js";

export type PaymentTotals = {
  transactionType: TransactionType11;
  transactionCount: number;
  transactionAmount: number;
};

export const paymentTotalsSchema: Schema<PaymentTotals> = s.object<PaymentTotals>({
  transactionType: transactionType11Schema,
  transactionCount: s.number(),
  transactionAmount: s.number(),
  _keysMap: {
    transactionType: "TransactionType",
    transactionCount: "TransactionCount",
    transactionAmount: "TransactionAmount",
  },
});

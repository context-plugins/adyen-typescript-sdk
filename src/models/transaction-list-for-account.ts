import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionListForAccount = {
  accountCode: string;
  page: number;
};

export const transactionListForAccountSchema: Schema<TransactionListForAccount> =
  s.object<TransactionListForAccount>({
    accountCode: s.string(),
    page: s.number(),
  });

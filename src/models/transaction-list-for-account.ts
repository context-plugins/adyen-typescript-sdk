import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionListForAccount = {
  /** The account for which to retrieve the transactions. */
  accountCode: string;
  /**
   * The page of transactions to retrieve. Each page lists fifty (50) transactions. The most recent
   * transactions are included on page 1.
   */
  page: number;
};

export const transactionListForAccountSchema: Schema<TransactionListForAccount> =
  s.object<TransactionListForAccount>({
    accountCode: s.string(),
    page: s.int(),
  });

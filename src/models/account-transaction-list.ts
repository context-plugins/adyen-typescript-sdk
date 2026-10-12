import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transaction1Schema, type Transaction1 } from "./transaction1.js";

export type AccountTransactionList = {
  /** The code of the account. */
  accountCode?: string;
  /** Indicates whether there is a next page of transactions available. */
  hasNextPage?: boolean;
  /** The list of transactions. */
  transactions?: Transaction1[];
};

export const accountTransactionListSchema: Schema<AccountTransactionList> = s.object<AccountTransactionList>({
  accountCode: s.optional(s.string()),
  hasNextPage: s.optional(s.boolean()),
  transactions: s.optional(s.array(s.lazy(() => transaction1Schema))),
});

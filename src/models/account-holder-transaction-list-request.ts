import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionListForAccountSchema,
  type TransactionListForAccount,
} from "./transaction-list-for-account.js";
import { transactionStatusSchema, type TransactionStatus } from "./transaction-status.js";

export type AccountHolderTransactionListRequest = {
  accountHolderCode: string;
  transactionListsPerAccount?: TransactionListForAccount[];
  transactionStatuses?: TransactionStatus[];
};

export const accountHolderTransactionListRequestSchema: Schema<AccountHolderTransactionListRequest> =
  s.object<AccountHolderTransactionListRequest>({
    accountHolderCode: s.string(),
    transactionListsPerAccount: s.optional(s.array(s.lazy(() => transactionListForAccountSchema))),
    transactionStatuses: s.optional(s.array(s.lazy(() => transactionStatusSchema))),
  });

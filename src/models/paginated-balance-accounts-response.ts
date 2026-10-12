import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceAccountBaseSchema, type BalanceAccountBase } from "./balance-account-base.js";

export type PaginatedBalanceAccountsResponse = {
  /** List of balance accounts. */
  balanceAccounts: BalanceAccountBase[];
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
};

export const paginatedBalanceAccountsResponseSchema: Schema<PaginatedBalanceAccountsResponse> =
  s.object<PaginatedBalanceAccountsResponse>({
    balanceAccounts: s.array(s.lazy(() => balanceAccountBaseSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceAccountBaseSchema, type BalanceAccountBase } from "./balance-account-base.js";

export type PaginatedBalanceAccountsResponse = {
  balanceAccounts: BalanceAccountBase[];
  hasNext: boolean;
  hasPrevious: boolean;
};

export const paginatedBalanceAccountsResponseSchema: Schema<PaginatedBalanceAccountsResponse> =
  s.object<PaginatedBalanceAccountsResponse>({
    balanceAccounts: s.array(s.lazy(() => balanceAccountBaseSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });

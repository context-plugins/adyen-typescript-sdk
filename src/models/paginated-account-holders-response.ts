import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderSchema, type AccountHolder } from "./account-holder.js";

export type PaginatedAccountHoldersResponse = {
  accountHolders: AccountHolder[];
  hasNext: boolean;
  hasPrevious: boolean;
};

export const paginatedAccountHoldersResponseSchema: Schema<PaginatedAccountHoldersResponse> =
  s.object<PaginatedAccountHoldersResponse>({
    accountHolders: s.array(s.lazy(() => accountHolderSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });

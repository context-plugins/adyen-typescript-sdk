import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderSchema, type AccountHolder } from "./account-holder.js";

export type PaginatedAccountHoldersResponse = {
  /** List of account holders. */
  accountHolders: AccountHolder[];
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
};

export const paginatedAccountHoldersResponseSchema: Schema<PaginatedAccountHoldersResponse> =
  s.object<PaginatedAccountHoldersResponse>({
    accountHolders: s.array(s.lazy(() => accountHolderSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });

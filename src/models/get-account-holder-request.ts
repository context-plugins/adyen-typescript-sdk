import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAccountHolderRequest = {
  /**
   * The code of the account of which to retrieve the details. > Required if no `accountHolderCode`
   * is provided.
   */
  accountCode?: string;
  /**
   * The code of the account holder of which to retrieve the details. > Required if no `accountCode`
   * is provided.
   */
  accountHolderCode?: string;
  /** True if the request should return the account holder details */
  showDetails?: boolean;
};

export const getAccountHolderRequestSchema: Schema<GetAccountHolderRequest> =
  s.object<GetAccountHolderRequest>({
    accountCode: s.optional(s.string()),
    accountHolderCode: s.optional(s.string()),
    showDetails: s.optional(s.boolean()),
  });

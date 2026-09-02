import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAccountHolderRequest = {
  accountCode?: string;
  accountHolderCode?: string;
  showDetails?: boolean;
};

export const getAccountHolderRequestSchema: Schema<GetAccountHolderRequest> =
  s.object<GetAccountHolderRequest>({
    accountCode: s.optional(s.string()),
    accountHolderCode: s.optional(s.string()),
    showDetails: s.optional(s.boolean()),
  });

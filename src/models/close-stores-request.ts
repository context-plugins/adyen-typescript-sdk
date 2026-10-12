import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CloseStoresRequest = {
  /** The code of the account holder. */
  accountHolderCode: string;
  /** List of stores to be closed. */
  stores: string[];
};

export const closeStoresRequestSchema: Schema<CloseStoresRequest> = s.object<CloseStoresRequest>({
  accountHolderCode: s.string(),
  stores: s.array(s.string()),
});

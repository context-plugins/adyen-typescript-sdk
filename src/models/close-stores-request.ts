import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CloseStoresRequest = {
  accountHolderCode: string;
  stores: string[];
};

export const closeStoresRequestSchema: Schema<CloseStoresRequest> = s.object<CloseStoresRequest>({
  accountHolderCode: s.string(),
  stores: s.array(s.string()),
});

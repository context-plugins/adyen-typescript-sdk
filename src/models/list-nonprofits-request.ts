import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListNonprofitsRequest = {
  accountHolderIds: string[];
};

export const listNonprofitsRequestSchema: Schema<ListNonprofitsRequest> = s.object<ListNonprofitsRequest>({
  accountHolderIds: s.array(s.string()),
});

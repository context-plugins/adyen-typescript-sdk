import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelTransfersRequest = {
  transferIds?: string[];
};

export const cancelTransfersRequestSchema: Schema<CancelTransfersRequest> = s.object<CancelTransfersRequest>({
  transferIds: s.optional(s.array(s.string())),
});

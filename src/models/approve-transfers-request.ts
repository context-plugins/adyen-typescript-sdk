import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApproveTransfersRequest = {
  transferIds?: string[];
};

export const approveTransfersRequestSchema: Schema<ApproveTransfersRequest> =
  s.object<ApproveTransfersRequest>({
    transferIds: s.optional(s.array(s.string())),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApproveTransferLimitRequest = {
  transferLimitIds: string[];
};

export const approveTransferLimitRequestSchema: Schema<ApproveTransferLimitRequest> =
  s.object<ApproveTransferLimitRequest>({
    transferLimitIds: s.array(s.string()),
  });

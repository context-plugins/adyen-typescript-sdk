import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApproveTransferLimitRequest = {
  /**
   * A list that includes the `transferLimitId` of all the pending transfer limits you want to
   * approve.
   */
  transferLimitIds: string[];
};

export const approveTransferLimitRequestSchema: Schema<ApproveTransferLimitRequest> =
  s.object<ApproveTransferLimitRequest>({
    transferLimitIds: s.array(s.string()),
  });

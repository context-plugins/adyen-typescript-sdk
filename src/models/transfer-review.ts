import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaOnApprovalSchema, type ScaOnApproval } from "./sca-on-approval.js";

export type TransferReview = {
  numberOfApprovalsRequired?: number;
  scaOnApproval?: ScaOnApproval;
};

export const transferReviewSchema: Schema<TransferReview> = s.object<TransferReview>({
  numberOfApprovalsRequired: s.optional(s.number()),
  scaOnApproval: s.optional(s.lazy(() => scaOnApprovalSchema)),
});

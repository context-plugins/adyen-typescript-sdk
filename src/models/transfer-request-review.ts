import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRequestReview = {
  numberOfApprovalsRequired?: number;
  scaOnApproval?: boolean;
};

export const transferRequestReviewSchema: Schema<TransferRequestReview> = s.object<TransferRequestReview>({
  numberOfApprovalsRequired: s.optional(s.number()),
  scaOnApproval: s.optional(s.boolean()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRequestReview2 = {
  numberOfApprovalsRequired?: number;
  scaOnApproval?: boolean;
};

export const transferRequestReview2Schema: Schema<TransferRequestReview2> = s.object<TransferRequestReview2>({
  numberOfApprovalsRequired: s.optional(s.number()),
  scaOnApproval: s.optional(s.boolean()),
});

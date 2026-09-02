import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaOnApprovalSchema, type ScaOnApproval } from "./sca-on-approval.js";

export type TransferReview1 = {
  numberOfApprovalsRequired?: number;
  scaOnApproval?: ScaOnApproval;
};

export const transferReview1Schema: Schema<TransferReview1> = s.object<TransferReview1>({
  numberOfApprovalsRequired: s.optional(s.number()),
  scaOnApproval: s.optional(s.lazy(() => scaOnApprovalSchema)),
});

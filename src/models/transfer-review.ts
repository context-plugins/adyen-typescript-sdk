import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaOnApprovalSchema, type ScaOnApproval } from "./sca-on-approval.js";

export type TransferReview = {
  /**
   * Shows the number of
   * [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve)
   * required to process the transfer.
   */
  numberOfApprovalsRequired?: number;
  /**
   * Shows the status of the Strong Customer Authentication (SCA) process.
   *
   * Possible values: **required**, **notApplicable**.
   */
  scaOnApproval?: ScaOnApproval;
};

export const transferReviewSchema: Schema<TransferReview> = s.object<TransferReview>({
  numberOfApprovalsRequired: s.optional(s.int()),
  scaOnApproval: s.optional(s.lazy(() => scaOnApprovalSchema)),
});

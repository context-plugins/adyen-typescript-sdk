import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRequestReview = {
  /**
   * Specifies the number of
   * [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve)
   * required to process the transfer.
   */
  numberOfApprovalsRequired?: number;
  /**
   * Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST
   * [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve)
   * request.
   *
   * Only applies to transfers made with an Adyen [business
   * account](https://docs.adyen.com/platforms/business-accounts).
   */
  scaOnApproval?: boolean;
};

export const transferRequestReviewSchema: Schema<TransferRequestReview> = s.object<TransferRequestReview>({
  numberOfApprovalsRequired: s.optional(s.int()),
  scaOnApproval: s.optional(s.boolean()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefundNotPaidOutTransfersRequest = {
  /** The code of the account from which to perform the refund(s). */
  accountCode: string;
  /** The code of the Account Holder which owns the account from which to perform the refund(s). */
  accountHolderCode: string;
};

export const refundNotPaidOutTransfersRequestSchema: Schema<RefundNotPaidOutTransfersRequest> =
  s.object<RefundNotPaidOutTransfersRequest>({
    accountCode: s.string(),
    accountHolderCode: s.string(),
  });

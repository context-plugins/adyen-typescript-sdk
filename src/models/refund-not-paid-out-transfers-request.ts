import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefundNotPaidOutTransfersRequest = {
  accountCode: string;
  accountHolderCode: string;
};

export const refundNotPaidOutTransfersRequestSchema: Schema<RefundNotPaidOutTransfersRequest> =
  s.object<RefundNotPaidOutTransfersRequest>({
    accountCode: s.string(),
    accountHolderCode: s.string(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type RefundFundsTransferRequest = {
  amount: Amount;
  merchantReference?: string;
  originalReference: string;
};

export const refundFundsTransferRequestSchema: Schema<RefundFundsTransferRequest> =
  s.object<RefundFundsTransferRequest>({
    amount: amountSchema,
    merchantReference: s.optional(s.string()),
    originalReference: s.string(),
  });

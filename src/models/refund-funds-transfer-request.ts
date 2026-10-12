import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type RefundFundsTransferRequest = {
  /** The amount to be transferred. */
  amount: Amount;
  /**
   * A value that can be supplied at the discretion of the executing user in order to link multiple
   * transactions to one another.
   */
  merchantReference?: string;
  /** A PSP reference of the original fund transfer. */
  originalReference: string;
};

export const refundFundsTransferRequestSchema: Schema<RefundFundsTransferRequest> =
  s.object<RefundFundsTransferRequest>({
    amount: amountSchema,
    merchantReference: s.optional(s.string()),
    originalReference: s.string(),
  });

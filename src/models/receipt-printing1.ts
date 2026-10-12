import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Transaction outcomes that you want the terminal to print a merchant receipt or a shopper receipt
 * for.
 */
export type ReceiptPrinting1 = {
  /** Print a merchant receipt when the payment is approved. */
  merchantApproved?: boolean;
  /** Print a merchant receipt when the transaction is cancelled. */
  merchantCancelled?: boolean;
  /** Print a merchant receipt when capturing the payment is approved. */
  merchantCaptureApproved?: boolean;
  /** Print a merchant receipt when capturing the payment is refused. */
  merchantCaptureRefused?: boolean;
  /** Print a merchant receipt when the refund is approved. */
  merchantRefundApproved?: boolean;
  /** Print a merchant receipt when the refund is refused. */
  merchantRefundRefused?: boolean;
  /** Print a merchant receipt when the payment is refused. */
  merchantRefused?: boolean;
  /** Print a merchant receipt when a previous transaction is voided. */
  merchantVoid?: boolean;
  /** Print a shopper receipt when the payment is approved. */
  shopperApproved?: boolean;
  /** Print a shopper receipt when the transaction is cancelled. */
  shopperCancelled?: boolean;
  /** Print a shopper receipt when capturing the payment is approved. */
  shopperCaptureApproved?: boolean;
  /** Print a shopper receipt when capturing the payment is refused. */
  shopperCaptureRefused?: boolean;
  /** Print a shopper receipt when the refund is approved. */
  shopperRefundApproved?: boolean;
  /** Print a shopper receipt when the refund is refused. */
  shopperRefundRefused?: boolean;
  /** Print a shopper receipt when the payment is refused. */
  shopperRefused?: boolean;
  /** Print a shopper receipt when a previous transaction is voided. */
  shopperVoid?: boolean;
};

export const receiptPrinting1Schema: Schema<ReceiptPrinting1> = s.object<ReceiptPrinting1>({
  merchantApproved: s.optional(s.boolean()),
  merchantCancelled: s.optional(s.boolean()),
  merchantCaptureApproved: s.optional(s.boolean()),
  merchantCaptureRefused: s.optional(s.boolean()),
  merchantRefundApproved: s.optional(s.boolean()),
  merchantRefundRefused: s.optional(s.boolean()),
  merchantRefused: s.optional(s.boolean()),
  merchantVoid: s.optional(s.boolean()),
  shopperApproved: s.optional(s.boolean()),
  shopperCancelled: s.optional(s.boolean()),
  shopperCaptureApproved: s.optional(s.boolean()),
  shopperCaptureRefused: s.optional(s.boolean()),
  shopperRefundApproved: s.optional(s.boolean()),
  shopperRefundRefused: s.optional(s.boolean()),
  shopperRefused: s.optional(s.boolean()),
  shopperVoid: s.optional(s.boolean()),
});

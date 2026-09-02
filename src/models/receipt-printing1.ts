import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiptPrinting1 = {
  merchantApproved?: boolean;
  merchantCancelled?: boolean;
  merchantCaptureApproved?: boolean;
  merchantCaptureRefused?: boolean;
  merchantRefundApproved?: boolean;
  merchantRefundRefused?: boolean;
  merchantRefused?: boolean;
  merchantVoid?: boolean;
  shopperApproved?: boolean;
  shopperCancelled?: boolean;
  shopperCaptureApproved?: boolean;
  shopperCaptureRefused?: boolean;
  shopperRefundApproved?: boolean;
  shopperRefundRefused?: boolean;
  shopperRefused?: boolean;
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

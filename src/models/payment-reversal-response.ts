import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentReversalResponse = {
  merchantAccount: string;
  paymentPspReference: string;
  pspReference: string;
  reference?: string;
  status: "received";
};

export const paymentReversalResponseSchema: Schema<PaymentReversalResponse> =
  s.object<PaymentReversalResponse>({
    merchantAccount: s.string(),
    paymentPspReference: s.string(),
    pspReference: s.string(),
    reference: s.optional(s.string()),
    status: s.literal("received"),
  });

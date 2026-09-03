import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentCancelResponse = {
  merchantAccount: string;
  paymentPspReference: string;
  pspReference: string;
  reference?: string;
  status: "received";
};

export const paymentCancelResponseSchema: Schema<PaymentCancelResponse> = s.object<PaymentCancelResponse>({
  merchantAccount: s.string(),
  paymentPspReference: s.string(),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  status: s.literal("received"),
});

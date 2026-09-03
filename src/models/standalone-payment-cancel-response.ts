import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StandalonePaymentCancelResponse = {
  merchantAccount: string;
  paymentReference: string;
  pspReference: string;
  reference?: string;
  status: "received";
};

export const standalonePaymentCancelResponseSchema: Schema<StandalonePaymentCancelResponse> =
  s.object<StandalonePaymentCancelResponse>({
    merchantAccount: s.string(),
    paymentReference: s.string(),
    pspReference: s.string(),
    reference: s.optional(s.string()),
    status: s.literal("received"),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type PaymentCancelResponse = {
  merchantAccount: string;
  paymentPspReference: string;
  pspReference: string;
  reference?: string;
  status: Status3;
};

export const paymentCancelResponseSchema: Schema<PaymentCancelResponse> = s.object<PaymentCancelResponse>({
  merchantAccount: s.string(),
  paymentPspReference: s.string(),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  status: status3Schema,
});

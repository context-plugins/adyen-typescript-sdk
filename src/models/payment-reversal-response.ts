import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type PaymentReversalResponse = {
  merchantAccount: string;
  paymentPspReference: string;
  pspReference: string;
  reference?: string;
  status: Status3;
};

export const paymentReversalResponseSchema: Schema<PaymentReversalResponse> =
  s.object<PaymentReversalResponse>({
    merchantAccount: s.string(),
    paymentPspReference: s.string(),
    pspReference: s.string(),
    reference: s.optional(s.string()),
    status: status3Schema,
  });

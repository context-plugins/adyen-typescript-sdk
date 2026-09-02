import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentSource2Schema, type PaymentSource2 } from "./payment-source2.js";

export type IdealPaymentDetailsRequest = {
  method?: string;
  payload: string;
  source: PaymentSource2;
};

export const idealPaymentDetailsRequestSchema: Schema<IdealPaymentDetailsRequest> =
  s.object<IdealPaymentDetailsRequest>({
    method: s.optional(s.string()),
    payload: s.string(),
    source: paymentSource2Schema,
  });

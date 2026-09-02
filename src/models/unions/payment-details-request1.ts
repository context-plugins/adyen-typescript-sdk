import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  idealPaymentDetailsRequestSchema,
  type IdealPaymentDetailsRequest,
} from "../ideal-payment-details-request.js";

export type PaymentDetailsRequest1 = IdealPaymentDetailsRequest & { method: "ideal" };

export const paymentDetailsRequest1Schema: Schema<PaymentDetailsRequest1> =
  s.discriminatedUnion<PaymentDetailsRequest1>("method", {
    ideal: idealPaymentDetailsRequestSchema,
  });

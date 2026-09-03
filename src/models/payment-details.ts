import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type43Schema, type Type43 } from "./type43.js";

export type PaymentDetails = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type43;
};

export const paymentDetailsSchema: Schema<PaymentDetails> = s.object<PaymentDetails>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type43Schema)),
});

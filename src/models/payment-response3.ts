import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentResponse3 = {
  brand?: string;
  type?: string;
};

export const paymentResponse3Schema: Schema<PaymentResponse3> = s.object<PaymentResponse3>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentResponse8 = {
  brand?: string;
  type?: string;
};

export const paymentResponse8Schema: Schema<PaymentResponse8> = s.object<PaymentResponse8>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

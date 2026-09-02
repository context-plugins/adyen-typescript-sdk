import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentResponse1 = {
  brand?: string;
  type?: string;
};

export const paymentResponse1Schema: Schema<PaymentResponse1> = s.object<PaymentResponse1>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

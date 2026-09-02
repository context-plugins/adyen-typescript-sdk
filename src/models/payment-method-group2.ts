import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodGroup2 = {
  name?: string;
  paymentMethodData?: string;
  type?: string;
};

export const paymentMethodGroup2Schema: Schema<PaymentMethodGroup2> = s.object<PaymentMethodGroup2>({
  name: s.optional(s.string()),
  paymentMethodData: s.optional(s.string()),
  type: s.optional(s.string()),
});

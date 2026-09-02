import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodGroup = {
  name?: string;
  paymentMethodData?: string;
  type?: string;
};

export const paymentMethodGroupSchema: Schema<PaymentMethodGroup> = s.object<PaymentMethodGroup>({
  name: s.optional(s.string()),
  paymentMethodData: s.optional(s.string()),
  type: s.optional(s.string()),
});

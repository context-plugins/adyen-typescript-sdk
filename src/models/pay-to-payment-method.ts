import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToPaymentMethod = {
  type?: string;
  shopperReference?: string;
};

export const payToPaymentMethodSchema: Schema<PayToPaymentMethod> = s.object<PayToPaymentMethod>({
  type: s.optional(s.string()),
  shopperReference: s.optional(s.string()),
});

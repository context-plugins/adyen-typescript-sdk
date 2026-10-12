import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";
import { storedPaymentMethod3Schema, type StoredPaymentMethod3 } from "./stored-payment-method3.js";

export type PaymentMethodsResponse = {
  /** Detailed list of payment methods required to generate payment forms. */
  paymentMethods?: PaymentMethod[];
  /** List of all stored payment methods. */
  storedPaymentMethods?: StoredPaymentMethod3[];
};

export const paymentMethodsResponseSchema: Schema<PaymentMethodsResponse> = s.object<PaymentMethodsResponse>({
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodSchema))),
  storedPaymentMethods: s.optional(s.array(s.lazy(() => storedPaymentMethod3Schema))),
});

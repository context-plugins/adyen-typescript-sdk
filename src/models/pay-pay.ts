import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type40Schema, type Type40 } from "./type40.js";

export type PayPay = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type40;
};

export const payPaySchema: Schema<PayPay> = s.object<PayPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type40Schema)),
});

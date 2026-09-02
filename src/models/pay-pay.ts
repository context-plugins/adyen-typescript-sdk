import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type55Schema, type Type55 } from "./type55.js";

export type PayPay = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type55;
};

export const payPaySchema: Schema<PayPay> = s.object<PayPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type55Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Afterpay = {
  billingAddress?: string;
  checkoutAttemptId?: string;
  deliveryAddress?: string;
  personalDetails?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: Type2;
};

export const afterpaySchema: Schema<Afterpay> = s.object<Afterpay>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type2Schema,
});

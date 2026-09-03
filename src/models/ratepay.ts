import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type48Schema, type Type48 } from "./type48.js";

export type Ratepay = {
  billingAddress?: string;
  checkoutAttemptId?: string;
  deliveryAddress?: string;
  personalDetails?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: Type48;
};

export const ratepaySchema: Schema<Ratepay> = s.object<Ratepay>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type48Schema,
});

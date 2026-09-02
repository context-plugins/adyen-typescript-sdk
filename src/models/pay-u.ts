import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type57Schema, type Type57 } from "./type57.js";

export type PayU = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
  type: Type57;
  virtualPaymentAddress?: string;
};

export const payUSchema: Schema<PayU> = s.object<PayU>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type57Schema,
  virtualPaymentAddress: s.optional(s.string()),
});

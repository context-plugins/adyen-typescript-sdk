import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type72Schema, type Type72 } from "./type72.js";

export type UpiQr = {
  billingSequenceNumber?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
  type: Type72;
};

export const upiQrSchema: Schema<UpiQr> = s.object<UpiQr>({
  billingSequenceNumber: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type72Schema,
});

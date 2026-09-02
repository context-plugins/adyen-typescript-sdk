import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type71Schema, type Type71 } from "./type71.js";

export type UpiIntent = {
  appId?: string;
  billingSequenceNumber?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
  type: Type71;
};

export const upiIntentSchema: Schema<UpiIntent> = s.object<UpiIntent>({
  appId: s.optional(s.string()),
  billingSequenceNumber: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type71Schema,
});

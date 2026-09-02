import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type70Schema, type Type70 } from "./type70.js";

export type UpiCollect = {
  billingSequenceNumber?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
  type: Type70;
  virtualPaymentAddress?: string;
};

export const upiCollectSchema: Schema<UpiCollect> = s.object<UpiCollect>({
  billingSequenceNumber: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type70Schema,
  virtualPaymentAddress: s.optional(s.string()),
});

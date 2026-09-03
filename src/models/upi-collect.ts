import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpiCollect = {
  billingSequenceNumber?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
  type: "upi_collect";
  virtualPaymentAddress?: string;
};

export const upiCollectSchema: Schema<UpiCollect> = s.object<UpiCollect>({
  billingSequenceNumber: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.literal("upi_collect"),
  virtualPaymentAddress: s.optional(s.string()),
});

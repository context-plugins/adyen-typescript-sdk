import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotifyShopperResult = {
  displayedReference?: string;
  message?: string;
  pspReference?: string;
  reference?: string;
  resultCode?: string;
  shopperNotificationReference?: string;
  storedPaymentMethodId?: string;
};

export const notifyShopperResultSchema: Schema<NotifyShopperResult> = s.object<NotifyShopperResult>({
  displayedReference: s.optional(s.string()),
  message: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
});

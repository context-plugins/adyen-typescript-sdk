import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotifyShopperResult = {
  /** Reference of Pre-debit notification that is displayed to the shopper */
  displayedReference?: string;
  /** A simple description of the `resultCode`. */
  message?: string;
  /** The unique reference that is associated with the request. */
  pspReference?: string;
  /** Reference of Pre-debit notification sent in my the merchant */
  reference?: string;
  /** The code indicating the status of notification. */
  resultCode?: string;
  /** The unique reference for the request sent downstream. */
  shopperNotificationReference?: string;
  /** This is the recurringDetailReference returned in the response when token was created */
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

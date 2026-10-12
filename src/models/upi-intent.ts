import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpiIntent = {
  /** TPAP (Third Party Application) Id that is being used to make the UPI payment */
  appId?: string;
  /**
   * The sequence number for the debit. For example, send **2** if this is the second debit for the
   * subscription. The sequence number is included in the notification sent to the shopper.
   */
  billingSequenceNumber?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /**
   * The `shopperNotificationReference` returned in the response when you requested to notify the
   * shopper. Used for recurring payment only.
   */
  shopperNotificationReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **upi_intent** @default "upi_intent" */
  type?: "upi_intent";
};

export const upiIntentSchema: Schema<UpiIntent> = s.object<UpiIntent>({
  appId: s.optional(s.string()),
  billingSequenceNumber: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(s.literal("upi_intent"), "upi_intent"),
});

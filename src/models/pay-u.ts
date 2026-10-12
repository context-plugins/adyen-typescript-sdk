import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayU = {
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
  /** **payu_IN_upi** @default "payu_IN_upi" */
  type?: "payu_IN_upi";
  /** The virtual payment address for UPI. */
  virtualPaymentAddress?: string;
};

export const payUSchema: Schema<PayU> = s.object<PayU>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(s.literal("payu_IN_upi"), "payu_IN_upi"),
  virtualPaymentAddress: s.optional(s.string()),
});

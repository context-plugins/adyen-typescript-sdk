import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pixRecurringSchema, type PixRecurring } from "./pix-recurring.js";
import { type44Schema, type Type44 } from "./type44.js";

export type StoredPaymentMethod4 = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  pixRecurring?: PixRecurring;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** The payment method type. */
  type?: Type44;
};

export const storedPaymentMethod4Schema: Schema<StoredPaymentMethod4> = s.object<StoredPaymentMethod4>({
  checkoutAttemptId: s.optional(s.string()),
  pixRecurring: s.optional(s.lazy(() => pixRecurringSchema)),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type44Schema)),
});

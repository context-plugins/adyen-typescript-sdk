import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Only returned for `resultCode`: **Authorised**. Details about the payment method used in the
 * transaction.
 */
export type PaymentResponse3 = {
  /**
   * The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is
   * **scheme**.
   */
  brand?: string;
  /** The `paymentMethod.type` value used in the request. */
  type?: string;
};

export const paymentResponse3Schema: Schema<PaymentResponse3> = s.object<PaymentResponse3>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

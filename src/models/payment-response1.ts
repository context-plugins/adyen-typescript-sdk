import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Details about the payment method used in the transaction. Only returned if `resultCode` is
 * **Authorised**.
 */
export type PaymentResponse1 = {
  /**
   * The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is
   * **scheme**.
   */
  brand?: string;
  /** The `paymentMethod.type` value used in the request. */
  type?: string;
};

export const paymentResponse1Schema: Schema<PaymentResponse1> = s.object<PaymentResponse1>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

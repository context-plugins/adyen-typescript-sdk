import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentResponse8 = {
  /**
   * The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is
   * **scheme**.
   */
  brand?: string;
  /** The `paymentMethod.type` value used in the request. */
  type?: string;
};

export const paymentResponse8Schema: Schema<PaymentResponse8> = s.object<PaymentResponse8>({
  brand: s.optional(s.string()),
  type: s.optional(s.string()),
});

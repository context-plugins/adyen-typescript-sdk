import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The group where this payment method belongs to. */
export type PaymentMethodGroup2 = {
  /** The name of the group. */
  name?: string;
  /** Echo data to be used if the payment method is displayed as part of this group. */
  paymentMethodData?: string;
  /** The unique code of the group. */
  type?: string;
};

export const paymentMethodGroup2Schema: Schema<PaymentMethodGroup2> = s.object<PaymentMethodGroup2>({
  name: s.optional(s.string()),
  paymentMethodData: s.optional(s.string()),
  type: s.optional(s.string()),
});

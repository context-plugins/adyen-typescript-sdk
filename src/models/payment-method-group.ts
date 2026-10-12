import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodGroup = {
  /** The name of the group. */
  name?: string;
  /** Echo data to be used if the payment method is displayed as part of this group. */
  paymentMethodData?: string;
  /** The unique code of the group. */
  type?: string;
};

export const paymentMethodGroupSchema: Schema<PaymentMethodGroup> = s.object<PaymentMethodGroup>({
  name: s.optional(s.string()),
  paymentMethodData: s.optional(s.string()),
  type: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutAwaitAction = {
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** **await** @default "await" */
  type?: "await";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutAwaitActionSchema: Schema<CheckoutAwaitAction> = s.object<CheckoutAwaitAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  type: s.defaulted(s.literal("await"), "await"),
  url: s.optional(s.string()),
});

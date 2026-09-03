import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutAwaitAction = {
  paymentData?: string;
  paymentMethodType?: string;
  type: "await";
  url?: string;
};

export const checkoutAwaitActionSchema: Schema<CheckoutAwaitAction> = s.object<CheckoutAwaitAction>({
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  type: s.literal("await"),
  url: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutRedirectAction = {
  /** When the redirect URL must be accessed via POST, use this data to post to the redirect URL. */
  data?: Record<string, string>;
  /** Specifies the HTTP method, for example GET or POST. */
  method?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** **redirect** @default "redirect" */
  type?: "redirect";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutRedirectActionSchema: Schema<CheckoutRedirectAction> = s.object<CheckoutRedirectAction>({
  data: s.optional(s.record(s.string(), s.string())),
  method: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  type: s.defaulted(s.literal("redirect"), "redirect"),
  url: s.optional(s.string()),
});

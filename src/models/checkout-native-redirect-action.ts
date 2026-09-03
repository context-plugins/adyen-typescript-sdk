import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutNativeRedirectAction = {
  data?: Record<string, string>;
  method?: string;
  nativeRedirectData?: string;
  paymentMethodType?: string;
  type: "nativeRedirect";
  url?: string;
};

export const checkoutNativeRedirectActionSchema: Schema<CheckoutNativeRedirectAction> =
  s.object<CheckoutNativeRedirectAction>({
    data: s.optional(s.record(s.string(), s.string())),
    method: s.optional(s.string()),
    nativeRedirectData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    type: s.literal("nativeRedirect"),
    url: s.optional(s.string()),
  });

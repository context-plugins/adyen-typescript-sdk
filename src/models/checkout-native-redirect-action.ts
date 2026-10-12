import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutNativeRedirectAction = {
  /** When the redirect URL must be accessed via POST, use this data to post to the redirect URL. */
  data?: Record<string, string>;
  /** Specifies the HTTP method, for example GET or POST. */
  method?: string;
  /**
   * Native SDK's redirect data containing the direct issuer link and state data that must be
   * submitted to the /v1/nativeRedirect/redirectResult.
   */
  nativeRedirectData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** **nativeRedirect** @default "nativeRedirect" */
  type?: "nativeRedirect";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutNativeRedirectActionSchema: Schema<CheckoutNativeRedirectAction> =
  s.object<CheckoutNativeRedirectAction>({
    data: s.optional(s.record(s.string(), s.string())),
    method: s.optional(s.string()),
    nativeRedirectData: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    type: s.defaulted(s.literal("nativeRedirect"), "nativeRedirect"),
    url: s.optional(s.string()),
  });

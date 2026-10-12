import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayResponseInfo = {
  /**
   * The list of merchant domains.
   *
   * For more information, see [Apple Pay
   * documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live).
   */
  domains?: string[];
};

export const applePayResponseInfoSchema: Schema<ApplePayResponseInfo> = s.object<ApplePayResponseInfo>({
  domains: s.optional(s.array(s.string())),
});

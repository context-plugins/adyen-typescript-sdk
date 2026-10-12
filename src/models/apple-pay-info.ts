import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePayInfo = {
  /**
   * The list of merchant domains. Maximum: 99 domains per request.
   *
   * For more information, see [Apple Pay
   * documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live).
   */
  domains: string[];
};

export const applePayInfoSchema: Schema<ApplePayInfo> = s.object<ApplePayInfo>({
  domains: s.array(s.string()),
});

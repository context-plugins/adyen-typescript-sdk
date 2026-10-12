import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePaySessionResponse = {
  /**
   * Base64 encoded data you need to [complete the Apple Pay merchant
   * validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).
   */
  data: string;
};

export const applePaySessionResponseSchema: Schema<ApplePaySessionResponse> =
  s.object<ApplePaySessionResponse>({
    data: s.string(),
  });

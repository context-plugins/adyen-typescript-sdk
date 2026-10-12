import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayInfo = {
  /**
   * Google Pay [Merchant ID](https://support.google.com/paymentscenter/answer/7163092?hl=en).
   * Character length and limitations: 16 alphanumeric characters or 20 numeric characters.
   */
  merchantId: string;
  /**
   * Indicates whether the Google Pay Merchant ID is used for several merchant accounts. Default
   * value: **false**.
   */
  reuseMerchantId?: boolean;
};

export const googlePayInfoSchema: Schema<GooglePayInfo> = s.object<GooglePayInfo>({
  merchantId: s.string(),
  reuseMerchantId: s.optional(s.boolean()),
});

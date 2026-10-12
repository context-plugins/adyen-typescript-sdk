import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **googlepay**. */
export type GooglePayInfo1 = {
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

export const googlePayInfo1Schema: Schema<GooglePayInfo1> = s.object<GooglePayInfo1>({
  merchantId: s.string(),
  reuseMerchantId: s.optional(s.boolean()),
});

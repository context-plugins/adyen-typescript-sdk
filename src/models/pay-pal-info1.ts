import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **paypal**. */
export type PayPalInfo1 = {
  /**
   * Indicates if direct (immediate) capture for PayPal is enabled. If set to **true**, this setting
   * overrides the [capture](https://docs.adyen.com/online-payments/capture) settings of your
   * merchant account. Default value: **true**.
   */
  directCapture?: boolean;
  /**
   * PayPal Merchant ID. Character length and limitations: 13 single-byte alphanumeric characters.
   */
  payerId: string;
  /** Your business email address. */
  subject: string;
};

export const payPalInfo1Schema: Schema<PayPalInfo1> = s.object<PayPalInfo1>({
  directCapture: s.optional(s.boolean()),
  payerId: s.string(),
  subject: s.string(),
});

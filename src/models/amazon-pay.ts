import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type4, type4Schema } from "./type4.js";

export type AmazonPay = {
  /**
   * This is the `amazonPayToken` that you obtained from the [Get Checkout
   * Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session)
   * response. This token is used for API only integration specifically.
   */
  amazonPayToken?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The `checkoutSessionId` is used to identify the checkout session at the Amazon Pay side. This
   * field is required only for drop-in and components integration, where it replaces the
   * amazonPayToken.
   */
  checkoutSessionId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **amazonpay** @default Type4.Amazonpay */
  type?: Type4;
};

export const amazonPaySchema: Schema<AmazonPay> = s.object<AmazonPay>({
  amazonPayToken: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  checkoutSessionId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type4Schema, Type4.Amazonpay),
});

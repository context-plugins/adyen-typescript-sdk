import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutThreeDs2Action = {
  /** A token needed to authorise a payment. */
  authorisationToken?: string;
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** A subtype of the token. */
  subtype?: string;
  /** A token to pass to the 3DS2 Component to get the fingerprint. */
  token?: string;
  /** **threeDS2** @default "threeDS2" */
  type?: "threeDS2";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutThreeDs2ActionSchema: Schema<CheckoutThreeDs2Action> = s.object<CheckoutThreeDs2Action>({
  authorisationToken: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  subtype: s.optional(s.string()),
  token: s.optional(s.string()),
  type: s.defaulted(s.literal("threeDS2"), "threeDS2"),
  url: s.optional(s.string()),
});

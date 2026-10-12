import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subtypeSchema, type Subtype } from "./subtype.js";

export type PayPal = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The unique ID associated with the order. */
  orderId?: string;
  /** IMMEDIATE_PAYMENT_REQUIRED or UNRESTRICTED */
  payeePreferred?: string;
  /** The unique ID associated with the payer. */
  payerId?: string;
  /** PAYPAL or PAYPAL_CREDIT */
  payerSelected?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** The type of flow to initiate. */
  subtype?: Subtype;
  /** **paypal** @default "paypal" */
  type?: "paypal";
};

export const payPalSchema: Schema<PayPal> = s.object<PayPal>({
  checkoutAttemptId: s.optional(s.string()),
  orderId: s.optional(s.string()),
  payeePreferred: s.optional(s.string()),
  payerId: s.optional(s.string()),
  payerSelected: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.lazy(() => subtypeSchema)),
  type: s.defaulted(s.literal("paypal"), "paypal"),
  _keysMap: {
    orderId: "orderID",
    payerId: "payerID",
  },
});

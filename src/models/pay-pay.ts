import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type40, type40Schema } from "./type40.js";

export type PayPay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
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
  /** **paypay** @default Type40.Paypay */
  type?: Type40;
};

export const payPaySchema: Schema<PayPay> = s.object<PayPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type40Schema, Type40.Paypay),
});

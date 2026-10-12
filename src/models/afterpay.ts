import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type2, type2Schema } from "./type2.js";

export type Afterpay = {
  /** The address where to send the invoice. */
  billingAddress?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The address where the goods should be delivered. */
  deliveryAddress?: string;
  /** Shopper name, date of birth, phone number, and email address. */
  personalDetails?: string;
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
  /** **afterpay_default** @default Type2.AfterpayDefault */
  type?: Type2;
};

export const afterpaySchema: Schema<Afterpay> = s.object<Afterpay>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type2Schema, Type2.AfterpayDefault),
});

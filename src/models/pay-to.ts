import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type41, type41Schema } from "./type41.js";

export type PayTo = {
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
  /** The shopper's banking details or payId reference, used to complete payment. */
  shopperAccountIdentifier?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **payto** @default Type41.Payto */
  type?: Type41;
};

export const payToSchema: Schema<PayTo> = s.object<PayTo>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperAccountIdentifier: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type41Schema, Type41.Payto),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type27, type27Schema } from "./type27.js";

export type StoredPaymentMethod1 = {
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
  /** **sepadirectdebit** @default Type27.Sepadirectdebit */
  type?: Type27;
};

export const storedPaymentMethod1Schema: Schema<StoredPaymentMethod1> = s.object<StoredPaymentMethod1>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type27Schema, Type27.Sepadirectdebit),
});

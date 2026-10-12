import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type53Schema, type Type53 } from "./type53.js";

export type Twint = {
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
  /** The type of flow to initiate. */
  subtype?: string;
  /** The payment method type. */
  type?: Type53;
};

export const twintSchema: Schema<Twint> = s.object<Twint>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.optional(s.lazy(() => type53Schema)),
});

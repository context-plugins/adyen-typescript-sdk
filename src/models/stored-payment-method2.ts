import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type31Schema, type Type31 } from "./type31.js";

export type StoredPaymentMethod2 = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The issuer id of the shopper's selected bank. */
  issuer: string;
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
  /**
   * **genericissuer**
   */
  type: Type31;
};

export const storedPaymentMethod2Schema: Schema<StoredPaymentMethod2> = s.object<StoredPaymentMethod2>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type31Schema,
});

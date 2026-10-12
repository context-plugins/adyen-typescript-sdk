import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type16, type16Schema } from "./type16.js";

export type StoredPaymentMethod = {
  /** Cash App issued cashtag for recurring payment */
  cashtag?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Cash App issued customerId for recurring payment */
  customerId?: string;
  /** Cash App issued grantId for one time payment */
  grantId?: string;
  /** Cash App issued onFileGrantId for recurring payment */
  onFileGrantId?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Cash App request id */
  requestId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** The payment method subtype. */
  subtype?: string;
  /** cashapp @default Type16.Cashapp */
  type?: Type16;
};

export const storedPaymentMethodSchema: Schema<StoredPaymentMethod> = s.object<StoredPaymentMethod>({
  cashtag: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  grantId: s.optional(s.string()),
  onFileGrantId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  requestId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.defaulted(type16Schema, Type16.Cashapp),
});

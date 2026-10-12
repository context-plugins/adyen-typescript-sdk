import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type54, type54Schema } from "./type54.js";

export type Vipps = {
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
  telephoneNumber: string;
  /** **vipps** @default Type54.Vipps */
  type?: Type54;
};

export const vippsSchema: Schema<Vipps> = s.object<Vipps>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  telephoneNumber: s.string(),
  type: s.defaulted(type54Schema, Type54.Vipps),
});

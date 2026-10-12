import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type9, type9Schema } from "./type9.js";

export type AuPay = {
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
  /** **aupay** @default Type9.Aupay */
  type?: Type9;
};

export const auPaySchema: Schema<AuPay> = s.object<AuPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type9Schema, Type9.Aupay),
});

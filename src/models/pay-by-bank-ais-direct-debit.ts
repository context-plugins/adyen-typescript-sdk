import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayByBankAisDirectDebit = {
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
  /** **paybybank_AIS_DD** @default "paybybank_AIS_DD" */
  type?: "paybybank_AIS_DD";
};

export const payByBankAisDirectDebitSchema: Schema<PayByBankAisDirectDebit> =
  s.object<PayByBankAisDirectDebit>({
    checkoutAttemptId: s.optional(s.string()),
    recurringDetailReference: s.optional(s.string()),
    sdkData: s.optional(s.string()),
    storedPaymentMethodId: s.optional(s.string()),
    type: s.defaulted(s.literal("paybybank_AIS_DD"), "paybybank_AIS_DD"),
  });

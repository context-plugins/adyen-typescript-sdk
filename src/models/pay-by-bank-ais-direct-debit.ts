import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayByBankAisDirectDebit = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: "paybybank_AIS_DD";
};

export const payByBankAisDirectDebitSchema: Schema<PayByBankAisDirectDebit> =
  s.object<PayByBankAisDirectDebit>({
    checkoutAttemptId: s.optional(s.string()),
    recurringDetailReference: s.optional(s.string()),
    sdkData: s.optional(s.string()),
    storedPaymentMethodId: s.optional(s.string()),
    type: s.literal("paybybank_AIS_DD"),
  });

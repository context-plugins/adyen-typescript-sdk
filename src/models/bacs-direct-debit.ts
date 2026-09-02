import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type10Schema, type Type10 } from "./type10.js";

export type BacsDirectDebit = {
  bankAccountNumber?: string;
  bankLocationId?: string;
  checkoutAttemptId?: string;
  holderName?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  transferInstrumentId?: string;
  type?: Type10;
};

export const bacsDirectDebitSchema: Schema<BacsDirectDebit> = s.object<BacsDirectDebit>({
  bankAccountNumber: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  holderName: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type10Schema)),
});

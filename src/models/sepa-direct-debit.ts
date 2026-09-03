import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type51Schema, type Type51 } from "./type51.js";

export type SepaDirectDebit = {
  checkoutAttemptId?: string;
  dueDate?: string;
  iban: string;
  ownerName: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  transferInstrumentId?: string;
  type?: Type51;
};

export const sepaDirectDebitSchema: Schema<SepaDirectDebit> = s.object<SepaDirectDebit>({
  checkoutAttemptId: s.optional(s.string()),
  dueDate: s.optional(s.string()),
  iban: s.string(),
  ownerName: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type51Schema)),
});

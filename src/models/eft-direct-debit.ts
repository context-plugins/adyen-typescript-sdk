import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type39Schema, type Type39 } from "./type39.js";

export type EftDirectDebit = {
  bankAccountNumber?: string;
  bankCode?: string;
  bankLocationId?: string;
  checkoutAttemptId?: string;
  ownerName?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type39;
};

export const eftDirectDebitSchema: Schema<EftDirectDebit> = s.object<EftDirectDebit>({
  bankAccountNumber: s.optional(s.string()),
  bankCode: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type39Schema)),
});

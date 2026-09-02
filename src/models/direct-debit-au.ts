import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type30Schema, type Type30 } from "./type30.js";

export type DirectDebitAu = {
  bankAccountNumber?: string;
  bankBranchCode?: string;
  checkoutAttemptId?: string;
  holderName: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type30;
};

export const directDebitAuSchema: Schema<DirectDebitAu> = s.object<DirectDebitAu>({
  bankAccountNumber: s.optional(s.string()),
  bankBranchCode: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  holderName: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type30Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type9Schema, type Type9 } from "./type9.js";

export type AuPay = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type9;
};

export const auPaySchema: Schema<AuPay> = s.object<AuPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type9Schema)),
});

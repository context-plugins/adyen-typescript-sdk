import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type20Schema, type Type20 } from "./type20.js";

export type DBarai = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type20;
};

export const dBaraiSchema: Schema<DBarai> = s.object<DBarai>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type20Schema)),
});

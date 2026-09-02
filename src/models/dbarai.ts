import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type28Schema, type Type28 } from "./type28.js";

export type DBarai = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type28;
};

export const dBaraiSchema: Schema<DBarai> = s.object<DBarai>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type28Schema)),
});

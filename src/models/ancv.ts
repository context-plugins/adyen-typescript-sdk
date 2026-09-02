import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

export type Ancv = {
  beneficiaryId?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type5;
};

export const ancvSchema: Schema<Ancv> = s.object<Ancv>({
  beneficiaryId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type5Schema)),
});

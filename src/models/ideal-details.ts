import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type25Schema, type Type25 } from "./type25.js";

export type IdealDetails = {
  checkoutAttemptId?: string;
  issuer?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type25;
};

export const idealDetailsSchema: Schema<IdealDetails> = s.object<IdealDetails>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type25Schema)),
});

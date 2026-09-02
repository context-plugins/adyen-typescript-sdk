import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type73Schema, type Type73 } from "./type73.js";

export type Vipps = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  telephoneNumber: string;
  type?: Type73;
};

export const vippsSchema: Schema<Vipps> = s.object<Vipps>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  telephoneNumber: s.string(),
  type: s.optional(s.lazy(() => type73Schema)),
});

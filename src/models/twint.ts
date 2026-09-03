import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type53Schema, type Type53 } from "./type53.js";

export type Twint = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: string;
  type?: Type53;
};

export const twintSchema: Schema<Twint> = s.object<Twint>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.optional(s.lazy(() => type53Schema)),
});

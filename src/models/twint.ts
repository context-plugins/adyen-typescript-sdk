import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type69Schema, type Type69 } from "./type69.js";

export type Twint = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: string;
  type?: Type69;
};

export const twintSchema: Schema<Twint> = s.object<Twint>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.optional(s.lazy(() => type69Schema)),
});

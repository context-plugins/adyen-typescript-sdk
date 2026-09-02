import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type42Schema, type Type42 } from "./type42.js";

export type StoredPaymentMethod2 = {
  checkoutAttemptId?: string;
  issuer: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type: Type42;
};

export const storedPaymentMethod2Schema: Schema<StoredPaymentMethod2> = s.object<StoredPaymentMethod2>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: type42Schema,
});

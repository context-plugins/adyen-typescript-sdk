import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type27Schema, type Type27 } from "./type27.js";

export type StoredPaymentMethod1 = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type27;
};

export const storedPaymentMethod1Schema: Schema<StoredPaymentMethod1> = s.object<StoredPaymentMethod1>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type27Schema)),
});

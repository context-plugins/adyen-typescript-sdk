import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pixRecurringSchema, type PixRecurring } from "./pix-recurring.js";
import { type60Schema, type Type60 } from "./type60.js";

export type StoredPaymentMethod4 = {
  checkoutAttemptId?: string;
  pixRecurring?: PixRecurring;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type60;
};

export const storedPaymentMethod4Schema: Schema<StoredPaymentMethod4> = s.object<StoredPaymentMethod4>({
  checkoutAttemptId: s.optional(s.string()),
  pixRecurring: s.optional(s.lazy(() => pixRecurringSchema)),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type60Schema)),
});

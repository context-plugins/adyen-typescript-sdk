import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type52Schema, type Type52 } from "./type52.js";

export type StoredPaymentMethod6 = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type52;
};

export const storedPaymentMethod6Schema: Schema<StoredPaymentMethod6> = s.object<StoredPaymentMethod6>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type52Schema)),
});

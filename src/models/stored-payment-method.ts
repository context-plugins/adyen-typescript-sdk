import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type16Schema, type Type16 } from "./type16.js";

export type StoredPaymentMethod = {
  cashtag?: string;
  checkoutAttemptId?: string;
  customerId?: string;
  grantId?: string;
  onFileGrantId?: string;
  recurringDetailReference?: string;
  requestId?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  subtype?: string;
  type?: Type16;
};

export const storedPaymentMethodSchema: Schema<StoredPaymentMethod> = s.object<StoredPaymentMethod>({
  cashtag: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  grantId: s.optional(s.string()),
  onFileGrantId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  requestId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.optional(s.lazy(() => type16Schema)),
});

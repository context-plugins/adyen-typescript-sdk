import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type13Schema, type Type13 } from "./type13.js";

export type Blik = {
  blikCode?: string;
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type13;
};

export const blikSchema: Schema<Blik> = s.object<Blik>({
  blikCode: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type13Schema)),
});

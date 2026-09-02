import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type63Schema, type Type63 } from "./type63.js";

export type RakutenPay = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type63;
};

export const rakutenPaySchema: Schema<RakutenPay> = s.object<RakutenPay>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type63Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type56Schema, type Type56 } from "./type56.js";

export type PayTo = {
  checkoutAttemptId?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperAccountIdentifier?: string;
  storedPaymentMethodId?: string;
  type?: Type56;
};

export const payToSchema: Schema<PayTo> = s.object<PayTo>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperAccountIdentifier: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type56Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pixPayByBankRiskSignalsSchema,
  type PixPayByBankRiskSignals,
} from "./pix-pay-by-bank-risk-signals.js";
import { type45Schema, type Type45 } from "./type45.js";

export type StoredPaymentMethod5 = {
  checkoutAttemptId?: string;
  deviceId?: string;
  issuer?: string;
  recurringDetailReference?: string;
  riskSignals?: PixPayByBankRiskSignals;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type45;
};

export const storedPaymentMethod5Schema: Schema<StoredPaymentMethod5> = s.object<StoredPaymentMethod5>({
  checkoutAttemptId: s.optional(s.string()),
  deviceId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  riskSignals: s.optional(s.lazy(() => pixPayByBankRiskSignalsSchema)),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type45Schema)),
});

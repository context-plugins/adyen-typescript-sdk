import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pixPayByBankRiskSignalsSchema,
  type PixPayByBankRiskSignals,
} from "./pix-pay-by-bank-risk-signals.js";
import { Type45, type45Schema } from "./type45.js";

export type StoredPaymentMethod5 = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  deviceId?: string;
  issuer?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  riskSignals?: PixPayByBankRiskSignals;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **paybybank_pix** @default Type45.PaybybankPix */
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
  type: s.defaulted(type45Schema, Type45.PaybybankPix),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentGroup = {
  balancePlatform: string;
  description?: string;
  id?: string;
  properties?: Record<string, string>;
  reference?: string;
  txVariant: string;
};

export const paymentInstrumentGroupSchema: Schema<PaymentInstrumentGroup> = s.object<PaymentInstrumentGroup>({
  balancePlatform: s.string(),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  properties: s.optional(s.record(s.string(), s.string())),
  reference: s.optional(s.string()),
  txVariant: s.string(),
});

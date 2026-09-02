import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentGroupInfo = {
  balancePlatform: string;
  description?: string;
  properties?: Record<string, string>;
  reference?: string;
  txVariant: string;
};

export const paymentInstrumentGroupInfoSchema: Schema<PaymentInstrumentGroupInfo> =
  s.object<PaymentInstrumentGroupInfo>({
    balancePlatform: s.string(),
    description: s.optional(s.string()),
    properties: s.optional(s.record(s.string(), s.string())),
    reference: s.optional(s.string()),
    txVariant: s.string(),
  });

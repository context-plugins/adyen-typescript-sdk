import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentRevealRequest = {
  encryptedKey: string;
  paymentInstrumentId: string;
};

export const paymentInstrumentRevealRequestSchema: Schema<PaymentInstrumentRevealRequest> =
  s.object<PaymentInstrumentRevealRequest>({
    encryptedKey: s.string(),
    paymentInstrumentId: s.string(),
  });

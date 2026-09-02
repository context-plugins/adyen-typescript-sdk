import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentRevealResponse = {
  encryptedData: string;
};

export const paymentInstrumentRevealResponseSchema: Schema<PaymentInstrumentRevealResponse> =
  s.object<PaymentInstrumentRevealResponse>({
    encryptedData: s.string(),
  });

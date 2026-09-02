import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentResource = {
  type?: string;
  paymentInstrumentId: string;
};

export const paymentInstrumentResourceSchema: Schema<PaymentInstrumentResource> =
  s.object<PaymentInstrumentResource>({
    type: s.optional(s.string()),
    paymentInstrumentId: s.string(),
  });

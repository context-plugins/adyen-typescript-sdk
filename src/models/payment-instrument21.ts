import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrument21 = {
  description?: string;
  id?: string;
  reference?: string;
  tokenType?: string;
};

export const paymentInstrument21Schema: Schema<PaymentInstrument21> = s.object<PaymentInstrument21>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  tokenType: s.optional(s.string()),
});

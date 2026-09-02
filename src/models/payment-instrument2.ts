import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrument2 = {
  description?: string;
  id?: string;
  reference?: string;
  tokenType?: string;
};

export const paymentInstrument2Schema: Schema<PaymentInstrument2> = s.object<PaymentInstrument2>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  tokenType: s.optional(s.string()),
});

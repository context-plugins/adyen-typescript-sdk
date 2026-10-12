import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrument2 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
  /** The type of wallet that the network token is associated with. */
  tokenType?: string;
};

export const paymentInstrument2Schema: Schema<PaymentInstrument2> = s.object<PaymentInstrument2>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  tokenType: s.optional(s.string()),
});

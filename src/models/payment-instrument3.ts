import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the payment instrument used in the transfer. */
export type PaymentInstrument3 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
  /** The type of wallet that the network token is associated with. */
  tokenType?: string;
};

export const paymentInstrument3Schema: Schema<PaymentInstrument3> = s.object<PaymentInstrument3>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  tokenType: s.optional(s.string()),
});

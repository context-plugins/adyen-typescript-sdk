import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the payment instrument that was used for the transaction. */
export type PaymentInstrument21 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The reference for the resource. */
  reference?: string;
  /** The type of wallet that the network token is associated with. */
  tokenType?: string;
};

export const paymentInstrument21Schema: Schema<PaymentInstrument21> = s.object<PaymentInstrument21>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  tokenType: s.optional(s.string()),
});

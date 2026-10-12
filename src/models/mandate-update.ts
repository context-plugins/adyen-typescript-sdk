import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandateUpdate = {
  /** The unique identifier of the payment instrument linked to the mandate. */
  paymentInstrumentId?: string | null;
};

export const mandateUpdateSchema: Schema<MandateUpdate> = s.object<MandateUpdate>({
  paymentInstrumentId: s.optionalNullable(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MandateUpdate = {
  paymentInstrumentId?: string | null;
};

export const mandateUpdateSchema: Schema<MandateUpdate> = s.object<MandateUpdate>({
  paymentInstrumentId: s.optionalNullable(s.string()),
});

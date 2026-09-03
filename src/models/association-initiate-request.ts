import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationInitiateRequest = {
  ids: string[];
  type: "PaymentInstrument";
};

export const associationInitiateRequestSchema: Schema<AssociationInitiateRequest> =
  s.object<AssociationInitiateRequest>({
    ids: s.array(s.string()),
    type: s.literal("PaymentInstrument"),
  });

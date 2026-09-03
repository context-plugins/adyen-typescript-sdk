import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationFinaliseResponse = {
  deviceId?: string;
  ids?: string[];
  type: "PAYMENT_INSTRUMENT";
};

export const associationFinaliseResponseSchema: Schema<AssociationFinaliseResponse> =
  s.object<AssociationFinaliseResponse>({
    deviceId: s.optional(s.string()),
    ids: s.optional(s.array(s.string())),
    type: s.literal("PAYMENT_INSTRUMENT"),
  });

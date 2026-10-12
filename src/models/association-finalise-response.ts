import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationFinaliseResponse = {
  /** The unique identifier of the SCA device you associated with a resource. */
  deviceId?: string;
  /** The list of unique identifiers of the resources that you associated with the SCA device. */
  ids?: string[];
  /** The type of resource that you associated with the SCA device. @default "PAYMENT_INSTRUMENT" */
  type?: "PAYMENT_INSTRUMENT";
};

export const associationFinaliseResponseSchema: Schema<AssociationFinaliseResponse> =
  s.object<AssociationFinaliseResponse>({
    deviceId: s.optional(s.string()),
    ids: s.optional(s.array(s.string())),
    type: s.defaulted(s.literal("PAYMENT_INSTRUMENT"), "PAYMENT_INSTRUMENT"),
  });

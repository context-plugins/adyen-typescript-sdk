import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The data of the result from the 3DS authentication. */
export type ThreeDSecure2 = {
  /** The transaction identifier for the Access Control Server */
  acsTransactionId?: string;
};

export const threeDSecure2Schema: Schema<ThreeDSecure2> = s.object<ThreeDSecure2>({
  acsTransactionId: s.optional(s.string()),
});

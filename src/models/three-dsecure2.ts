import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDSecure2 = {
  acsTransactionId?: string;
};

export const threeDSecure2Schema: Schema<ThreeDSecure2> = s.object<ThreeDSecure2>({
  acsTransactionId: s.optional(s.string()),
});

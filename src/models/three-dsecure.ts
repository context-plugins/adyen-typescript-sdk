import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDSecure = {
  acsTransactionId?: string;
};

export const threeDSecureSchema: Schema<ThreeDSecure> = s.object<ThreeDSecure>({
  acsTransactionId: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycCheckResult2 = {
  checks?: KycCheckStatusData[];
};

export const kycCheckResult2Schema: Schema<KycCheckResult2> = s.object<KycCheckResult2>({
  checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
});

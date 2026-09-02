import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycCheckResult = {
  checks?: KycCheckStatusData[];
};

export const kycCheckResultSchema: Schema<KycCheckResult> = s.object<KycCheckResult>({
  checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
});

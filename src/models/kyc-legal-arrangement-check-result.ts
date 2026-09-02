import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycLegalArrangementCheckResult = {
  checks?: KycCheckStatusData[];
  legalArrangementCode?: string;
};

export const kycLegalArrangementCheckResultSchema: Schema<KycLegalArrangementCheckResult> =
  s.object<KycLegalArrangementCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    legalArrangementCode: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycLegalArrangementCheckResult = {
  /** A list of the checks and their statuses. */
  checks?: KycCheckStatusData[];
  /** The unique ID of the legal arrangement to which the check applies. */
  legalArrangementCode?: string;
};

export const kycLegalArrangementCheckResultSchema: Schema<KycLegalArrangementCheckResult> =
  s.object<KycLegalArrangementCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    legalArrangementCode: s.optional(s.string()),
  });

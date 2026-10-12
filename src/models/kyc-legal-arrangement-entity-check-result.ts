import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycLegalArrangementEntityCheckResult = {
  /** A list of the checks and their statuses. */
  checks?: KycCheckStatusData[];
  /** The unique ID of the legal arrangement to which the entity belongs. */
  legalArrangementCode?: string;
  /** The unique ID of the legal arrangement entity to which the check applies. */
  legalArrangementEntityCode?: string;
};

export const kycLegalArrangementEntityCheckResultSchema: Schema<KycLegalArrangementEntityCheckResult> =
  s.object<KycLegalArrangementEntityCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    legalArrangementCode: s.optional(s.string()),
    legalArrangementEntityCode: s.optional(s.string()),
  });

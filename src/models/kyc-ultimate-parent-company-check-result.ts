import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycUltimateParentCompanyCheckResult = {
  /** A list of the checks and their statuses. */
  checks?: KycCheckStatusData[];
  /** The code of the Ultimate Parent Company to which the check applies. */
  ultimateParentCompanyCode?: string;
};

export const kycUltimateParentCompanyCheckResultSchema: Schema<KycUltimateParentCompanyCheckResult> =
  s.object<KycUltimateParentCompanyCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    ultimateParentCompanyCode: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycPayoutMethodCheckResult = {
  /** A list of the checks and their statuses. */
  checks?: KycCheckStatusData[];
  /** The unique ID of the payoput method to which the check applies. */
  payoutMethodCode?: string;
};

export const kycPayoutMethodCheckResultSchema: Schema<KycPayoutMethodCheckResult> =
  s.object<KycPayoutMethodCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    payoutMethodCode: s.optional(s.string()),
  });

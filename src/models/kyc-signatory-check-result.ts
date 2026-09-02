import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycSignatoryCheckResult = {
  checks?: KycCheckStatusData[];
  signatoryCode?: string;
};

export const kycSignatoryCheckResultSchema: Schema<KycSignatoryCheckResult> =
  s.object<KycSignatoryCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    signatoryCode: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycShareholderCheckResult = {
  checks?: KycCheckStatusData[];
  legalArrangementCode?: string;
  legalArrangementEntityCode?: string;
  shareholderCode?: string;
};

export const kycShareholderCheckResultSchema: Schema<KycShareholderCheckResult> =
  s.object<KycShareholderCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    legalArrangementCode: s.optional(s.string()),
    legalArrangementEntityCode: s.optional(s.string()),
    shareholderCode: s.optional(s.string()),
  });

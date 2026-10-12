import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckStatusDataSchema, type KycCheckStatusData } from "./kyc-check-status-data.js";

export type KycShareholderCheckResult = {
  /** A list of the checks and their statuses. */
  checks?: KycCheckStatusData[];
  /** The unique ID of the legal arrangement to which the shareholder belongs, if applicable. */
  legalArrangementCode?: string;
  /**
   * The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.
   */
  legalArrangementEntityCode?: string;
  /** The code of the shareholder to which the check applies. */
  shareholderCode?: string;
};

export const kycShareholderCheckResultSchema: Schema<KycShareholderCheckResult> =
  s.object<KycShareholderCheckResult>({
    checks: s.optional(s.array(s.lazy(() => kycCheckStatusDataSchema))),
    legalArrangementCode: s.optional(s.string()),
    legalArrangementEntityCode: s.optional(s.string()),
    shareholderCode: s.optional(s.string()),
  });

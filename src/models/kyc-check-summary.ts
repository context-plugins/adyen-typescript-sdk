import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KycCheckSummary = {
  /**
   * The code of the check. For possible values, refer to [Verification
   * codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes).
   */
  kycCheckCode?: number;
  /** A description of the check. */
  kycCheckDescription?: string;
};

export const kycCheckSummarySchema: Schema<KycCheckSummary> = s.object<KycCheckSummary>({
  kycCheckCode: s.optional(s.int()),
  kycCheckDescription: s.optional(s.string()),
});

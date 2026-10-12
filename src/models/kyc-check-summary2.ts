import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A summary of the execution of the check. */
export type KycCheckSummary2 = {
  /**
   * The code of the check. For possible values, refer to [Verification
   * codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes).
   */
  kycCheckCode?: number;
  /** A description of the check. */
  kycCheckDescription?: string;
};

export const kycCheckSummary2Schema: Schema<KycCheckSummary2> = s.object<KycCheckSummary2>({
  kycCheckCode: s.optional(s.int()),
  kycCheckDescription: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableFraudInfo = {
  /**
   * The card is no longer in the cardholder's possession. Set to **true** if the card is lost or
   * stolen.
   */
  cardDoesNotBelongToCardholder?: boolean;
  /** The card was counterfeited. */
  cardWasCounterfeited?: boolean;
  /** Your description of the issue for raising a dispute of `type` **fraud**. */
  descriptionOfIssue?: string;
  /**
   * Set to **true** to report fraud to Adyen with no further action, such as a request for a
   * chargeback or fee reversal. The default value is **false**.
   */
  reportOnly?: boolean | null;
};

export const patchableFraudInfoSchema: Schema<PatchableFraudInfo> = s.object<PatchableFraudInfo>({
  cardDoesNotBelongToCardholder: s.optional(s.boolean()),
  cardWasCounterfeited: s.optional(s.boolean()),
  descriptionOfIssue: s.optional(s.string()),
  reportOnly: s.optionalNullable(s.boolean()),
});

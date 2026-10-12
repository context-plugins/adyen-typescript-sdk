import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";
import { thresholdRepayment21Schema, type ThresholdRepayment21 } from "./threshold-repayment21.js";

export type Repayment1 = {
  /**
   * The percentage of your user's incoming net volume that is deducted for repaying the grant. The
   * percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).
   */
  basisPoints: number;
  /**
   * Contains information about the time period in which your user must repay the total amount of
   * the grant.
   */
  term?: RepaymentTerm;
  /** Contains the minimum threshold amount that your user must repay every 30-day period. */
  threshold?: ThresholdRepayment21;
};

export const repayment1Schema: Schema<Repayment1> = s.object<Repayment1>({
  basisPoints: s.int(),
  term: s.optional(s.lazy(() => repaymentTermSchema)),
  threshold: s.optional(s.lazy(() => thresholdRepayment21Schema)),
});

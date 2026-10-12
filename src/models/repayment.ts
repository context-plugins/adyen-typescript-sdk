import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";
import { thresholdRepayment2Schema, type ThresholdRepayment2 } from "./threshold-repayment2.js";

/** An object containing the details of the 30-day repayment threshold. */
export type Repayment = {
  /**
   * The repayment that is deducted daily from incoming net volume, in [basis
   * points](https://www.investopedia.com/terms/b/basispoint.asp).
   */
  basisPoints: number;
  /** An object containing the details of the configuration for repayment term. */
  term?: RepaymentTerm;
  /** An object containing the details of the 30-day repayment threshold. */
  threshold?: ThresholdRepayment2;
};

export const repaymentSchema: Schema<Repayment> = s.object<Repayment>({
  basisPoints: s.int(),
  term: s.optional(s.lazy(() => repaymentTermSchema)),
  threshold: s.optional(s.lazy(() => thresholdRepayment2Schema)),
});

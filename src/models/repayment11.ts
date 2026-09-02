import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";
import { thresholdRepayment21Schema, type ThresholdRepayment21 } from "./threshold-repayment21.js";

export type Repayment11 = {
  basisPoints: number;
  term?: RepaymentTerm;
  threshold?: ThresholdRepayment21;
};

export const repayment11Schema: Schema<Repayment11> = s.object<Repayment11>({
  basisPoints: s.number(),
  term: s.optional(s.lazy(() => repaymentTermSchema)),
  threshold: s.optional(s.lazy(() => thresholdRepayment21Schema)),
});

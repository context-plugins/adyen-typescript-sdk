import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";
import { thresholdRepayment2Schema, type ThresholdRepayment2 } from "./threshold-repayment2.js";

export type Repayment2 = {
  basisPoints: number;
  term?: RepaymentTerm;
  threshold?: ThresholdRepayment2;
};

export const repayment2Schema: Schema<Repayment2> = s.object<Repayment2>({
  basisPoints: s.number(),
  term: s.optional(s.lazy(() => repaymentTermSchema)),
  threshold: s.optional(s.lazy(() => thresholdRepayment2Schema)),
});

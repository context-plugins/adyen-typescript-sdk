import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";
import { thresholdRepayment2Schema, type ThresholdRepayment2 } from "./threshold-repayment2.js";

export type Repayment = {
  basisPoints: number;
  term?: RepaymentTerm;
  threshold?: ThresholdRepayment2;
};

export const repaymentSchema: Schema<Repayment> = s.object<Repayment>({
  basisPoints: s.number(),
  term: s.optional(s.lazy(() => repaymentTermSchema)),
  threshold: s.optional(s.lazy(() => thresholdRepayment2Schema)),
});

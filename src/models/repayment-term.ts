import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RepaymentTerm = {
  estimatedDays: number;
  maximumDays?: number;
};

export const repaymentTermSchema: Schema<RepaymentTerm> = s.object<RepaymentTerm>({
  estimatedDays: s.number(),
  maximumDays: s.optional(s.number()),
});

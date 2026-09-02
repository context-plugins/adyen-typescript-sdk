import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CostEstimateAssumptions1 = {
  assume3DSecureAuthenticated?: boolean;
  assumeLevel3Data?: boolean;
  installments?: number;
};

export const costEstimateAssumptions1Schema: Schema<CostEstimateAssumptions1> =
  s.object<CostEstimateAssumptions1>({
    assume3DSecureAuthenticated: s.optional(s.boolean()),
    assumeLevel3Data: s.optional(s.boolean()),
    installments: s.optional(s.number()),
  });

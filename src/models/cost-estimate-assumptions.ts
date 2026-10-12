import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CostEstimateAssumptions = {
  /** If true, the cardholder is expected to successfully authorise via 3D Secure. */
  assume3DSecureAuthenticated?: boolean;
  /** If true, the transaction is expected to have valid Level 3 data. */
  assumeLevel3Data?: boolean;
  /** If not zero, the number of installments. */
  installments?: number;
};

export const costEstimateAssumptionsSchema: Schema<CostEstimateAssumptions> =
  s.object<CostEstimateAssumptions>({
    assume3DSecureAuthenticated: s.optional(s.boolean()),
    assumeLevel3Data: s.optional(s.boolean()),
    installments: s.optional(s.int()),
  });

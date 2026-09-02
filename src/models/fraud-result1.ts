import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fraudCheckResultSchema, type FraudCheckResult } from "./fraud-check-result.js";

export type FraudResult1 = {
  accountScore: number;
  results?: FraudCheckResult[];
};

export const fraudResult1Schema: Schema<FraudResult1> = s.object<FraudResult1>({
  accountScore: s.number(),
  results: s.optional(s.array(s.lazy(() => fraudCheckResultSchema))),
});

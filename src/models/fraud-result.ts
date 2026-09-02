import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fraudCheckResultSchema, type FraudCheckResult } from "./fraud-check-result.js";

export type FraudResult = {
  accountScore: number;
  results?: FraudCheckResult[];
};

export const fraudResultSchema: Schema<FraudResult> = s.object<FraudResult>({
  accountScore: s.number(),
  results: s.optional(s.array(s.lazy(() => fraudCheckResultSchema))),
});

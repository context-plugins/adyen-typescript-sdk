import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskScoresSchema, type RiskScores } from "./risk-scores.js";

/**
 * Risk scores provided by specific sources. The same operation applies to all scores.
 *
 * Current sources available: **visa**, **mastercard**
 *
 * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
 * **lessThanOrEqualTo**, **lessThan**.
 */
export type RiskScoresRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: RiskScores;
};

export const riskScoresRestriction1Schema: Schema<RiskScoresRestriction1> = s.object<RiskScoresRestriction1>({
  operation: s.string(),
  value: s.optional(s.lazy(() => riskScoresSchema)),
});

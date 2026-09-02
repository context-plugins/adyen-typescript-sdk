import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskScoresSchema, type RiskScores } from "./risk-scores.js";

export type RiskScoresRestriction1 = {
  operation: string;
  value?: RiskScores;
};

export const riskScoresRestriction1Schema: Schema<RiskScoresRestriction1> = s.object<RiskScoresRestriction1>({
  operation: s.string(),
  value: s.optional(s.lazy(() => riskScoresSchema)),
});

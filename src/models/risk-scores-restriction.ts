import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskScoresSchema, type RiskScores } from "./risk-scores.js";

export type RiskScoresRestriction = {
  operation: string;
  value?: RiskScores;
};

export const riskScoresRestrictionSchema: Schema<RiskScoresRestriction> = s.object<RiskScoresRestriction>({
  operation: s.string(),
  value: s.optional(s.lazy(() => riskScoresSchema)),
});

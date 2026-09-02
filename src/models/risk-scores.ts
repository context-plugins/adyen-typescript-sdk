import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskScores = {
  mastercard?: number;
  visa?: number;
};

export const riskScoresSchema: Schema<RiskScores> = s.object<RiskScores>({
  mastercard: s.optional(s.number()),
  visa: s.optional(s.number()),
});

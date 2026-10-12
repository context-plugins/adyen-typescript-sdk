import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskScores = {
  /**
   * Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0
   * (lowest risk) to 998 (highest risk).
   */
  mastercard?: number;
  /**
   * Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk)
   * to 99 (highest risk).
   */
  visa?: number;
};

export const riskScoresSchema: Schema<RiskScores> = s.object<RiskScores>({
  mastercard: s.optional(s.int()),
  visa: s.optional(s.int()),
});

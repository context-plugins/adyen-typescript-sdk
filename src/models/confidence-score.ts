import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfidenceScore = {
  errors?: string[];
  score?: number;
};

export const confidenceScoreSchema: Schema<ConfidenceScore> = s.object<ConfidenceScore>({
  errors: s.optional(s.array(s.string())),
  score: s.optional(s.number()),
});

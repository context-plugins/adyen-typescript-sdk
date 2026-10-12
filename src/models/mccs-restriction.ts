import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MccsRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** List of merchant category codes (MCCs). */
  value?: string[];
};

export const mccsRestrictionSchema: Schema<MccsRestriction> = s.object<MccsRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});

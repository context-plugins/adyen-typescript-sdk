import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * List of merchant category codes (MCCs) and the operation.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 */
export type MccsRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** List of merchant category codes (MCCs). */
  value?: string[];
};

export const mccsRestriction1Schema: Schema<MccsRestriction1> = s.object<MccsRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemediatingAction = {
  /** The remediating action code. */
  code?: string;
  /** A description of how you can resolve the verification error. */
  message?: string;
};

export const remediatingActionSchema: Schema<RemediatingAction> = s.object<RemediatingAction>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});

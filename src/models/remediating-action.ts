import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemediatingAction = {
  code?: string;
  message?: string;
};

export const remediatingActionSchema: Schema<RemediatingAction> = s.object<RemediatingAction>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});

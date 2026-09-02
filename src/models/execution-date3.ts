import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExecutionDate3 = {
  date?: string;
  timezone?: string;
};

export const executionDate3Schema: Schema<ExecutionDate3> = s.object<ExecutionDate3>({
  date: s.optional(s.dateOnly()),
  timezone: s.optional(s.string()),
});

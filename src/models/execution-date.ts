import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExecutionDate = {
  date?: string;
  timezone?: string;
};

export const executionDateSchema: Schema<ExecutionDate> = s.object<ExecutionDate>({
  date: s.optional(s.dateOnly()),
  timezone: s.optional(s.string()),
});

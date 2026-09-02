import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExecutionDate1 = {
  date?: string;
  timezone?: string;
};

export const executionDate1Schema: Schema<ExecutionDate1> = s.object<ExecutionDate1>({
  date: s.optional(s.dateOnly()),
  timezone: s.optional(s.string()),
});

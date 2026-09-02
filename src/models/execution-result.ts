import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExecutionResult = {
  Failed: "failed",
  Succeeded: "succeeded",
  Skipped: "skipped",
} as const;
export type ExecutionResult = (typeof ExecutionResult)[keyof typeof ExecutionResult] | (string & {});

export const executionResultSchema: EnumSchema<ExecutionResult> = s.enumOf<ExecutionResult>(ExecutionResult);

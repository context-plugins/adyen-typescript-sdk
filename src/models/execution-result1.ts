import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExecutionResult1 = {
  Failed: "failed",
  Succeeded: "succeeded",
  Skipped: "skipped",
} as const;
export type ExecutionResult1 = (typeof ExecutionResult1)[keyof typeof ExecutionResult1] | (string & {});

export const executionResult1Schema: EnumSchema<ExecutionResult1> =
  s.enumOf<ExecutionResult1>(ExecutionResult1);

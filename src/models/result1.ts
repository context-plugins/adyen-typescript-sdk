import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Result1 = {
  Valid: "VALID",
  Invalid: "INVALID",
  Unknown: "UNKNOWN",
  NotRequired: "NOT_REQUIRED",
} as const;
export type Result1 = (typeof Result1)[keyof typeof Result1] | (string & {});

export const result1Schema: EnumSchema<Result1> = s.enumOf<Result1>(Result1);

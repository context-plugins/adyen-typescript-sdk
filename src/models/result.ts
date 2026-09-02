import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Result = {
  Valid: "VALID",
  Invalid: "INVALID",
  Unknown: "UNKNOWN",
  NotRequired: "NOT_REQUIRED",
} as const;
export type Result = (typeof Result)[keyof typeof Result] | (string & {});

export const resultSchema: EnumSchema<Result> = s.enumOf<Result>(Result);

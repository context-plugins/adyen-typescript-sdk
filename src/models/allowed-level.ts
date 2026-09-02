import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedLevel = {
  High: "high",
  Low: "low",
  Medium: "medium",
  NotApplicable: "notApplicable",
} as const;
export type AllowedLevel = (typeof AllowedLevel)[keyof typeof AllowedLevel] | (string & {});

export const allowedLevelSchema: EnumSchema<AllowedLevel> = s.enumOf<AllowedLevel>(AllowedLevel);

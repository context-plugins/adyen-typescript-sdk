import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestedLevel = {
  High: "high",
  Low: "low",
  Medium: "medium",
  NotApplicable: "notApplicable",
} as const;
export type RequestedLevel = (typeof RequestedLevel)[keyof typeof RequestedLevel] | (string & {});

export const requestedLevelSchema: EnumSchema<RequestedLevel> = s.enumOf<RequestedLevel>(RequestedLevel);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The requested level of the capability. Some capabilities, such as those used in [card
 * issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different
 * levels. Levels increase the capability, but also require additional checks and increased
 * monitoring.
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**.
 */
export const RequestedLevel = {
  High: "high",
  Low: "low",
  Medium: "medium",
  NotApplicable: "notApplicable",
} as const;
export type RequestedLevel = (typeof RequestedLevel)[keyof typeof RequestedLevel] | (string & {});

export const requestedLevelSchema: EnumSchema<RequestedLevel> = s.enumOf<RequestedLevel>(RequestedLevel);

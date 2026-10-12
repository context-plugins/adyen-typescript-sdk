import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The capability level that is allowed for the account holder.
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**., The capability level that is
 * allowed for the legal entity.
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**., The requested level of the
 * capability. Some capabilities, such as those used in [card
 * issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different
 * levels. Levels increase the capability, but also require additional checks and increased
 * monitoring.
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**.
 */
export const AllowedLevel = {
  High: "high",
  Low: "low",
  Medium: "medium",
  NotApplicable: "notApplicable",
} as const;
export type AllowedLevel = (typeof AllowedLevel)[keyof typeof AllowedLevel] | (string & {});

export const allowedLevelSchema: EnumSchema<AllowedLevel> = s.enumOf<AllowedLevel>(AllowedLevel);

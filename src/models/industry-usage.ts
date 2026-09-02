import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IndustryUsage = {
  NoShow: "NoShow",
  DelayedCharge: "DelayedCharge",
} as const;
export type IndustryUsage = (typeof IndustryUsage)[keyof typeof IndustryUsage] | (string & {});

export const industryUsageSchema: EnumSchema<IndustryUsage> = s.enumOf<IndustryUsage>(IndustryUsage);

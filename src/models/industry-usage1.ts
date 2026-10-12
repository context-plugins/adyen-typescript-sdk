import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for the amount update. Possible values:
 * * **delayedCharge**
 * * **noShow**
 * * **installment**
 */
export const IndustryUsage1 = {
  DelayedCharge: "delayedCharge",
  Installment: "installment",
  NoShow: "noShow",
} as const;
export type IndustryUsage1 = (typeof IndustryUsage1)[keyof typeof IndustryUsage1] | (string & {});

export const industryUsage1Schema: EnumSchema<IndustryUsage1> = s.enumOf<IndustryUsage1>(IndustryUsage1);

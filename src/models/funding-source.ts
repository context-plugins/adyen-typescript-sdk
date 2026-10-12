import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The funding source that should be used when multiple sources are available. For Brazilian combo
 * cards, by default the funding source is credit. To use debit, set this value to **debit**.
 */
export const FundingSource = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
} as const;
export type FundingSource = (typeof FundingSource)[keyof typeof FundingSource] | (string & {});

export const fundingSourceSchema: EnumSchema<FundingSource> = s.enumOf<FundingSource>(FundingSource);

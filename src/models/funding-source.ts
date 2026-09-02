import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingSource = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
} as const;
export type FundingSource = (typeof FundingSource)[keyof typeof FundingSource] | (string & {});

export const fundingSourceSchema: EnumSchema<FundingSource> = s.enumOf<FundingSource>(FundingSource);

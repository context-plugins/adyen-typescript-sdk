import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingSource9 = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
} as const;
export type FundingSource9 = (typeof FundingSource9)[keyof typeof FundingSource9] | (string & {});

export const fundingSource9Schema: EnumSchema<FundingSource9> = s.enumOf<FundingSource9>(FundingSource9);

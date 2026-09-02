import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterMerchantAccountType2 = {
  AllAccounts: "allAccounts",
  ExcludeAccounts: "excludeAccounts",
  IncludeAccounts: "includeAccounts",
} as const;
export type FilterMerchantAccountType2 =
  | (typeof FilterMerchantAccountType2)[keyof typeof FilterMerchantAccountType2]
  | (string & {});

export const filterMerchantAccountType2Schema: EnumSchema<FilterMerchantAccountType2> =
  s.enumOf<FilterMerchantAccountType2>(FilterMerchantAccountType2);

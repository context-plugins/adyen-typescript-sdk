import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterMerchantAccountType = {
  AllAccounts: "allAccounts",
  ExcludeAccounts: "excludeAccounts",
  IncludeAccounts: "includeAccounts",
} as const;
export type FilterMerchantAccountType =
  | (typeof FilterMerchantAccountType)[keyof typeof FilterMerchantAccountType]
  | (string & {});

export const filterMerchantAccountTypeSchema: EnumSchema<FilterMerchantAccountType> =
  s.enumOf<FilterMerchantAccountType>(FilterMerchantAccountType);

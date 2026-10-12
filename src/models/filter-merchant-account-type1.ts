import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shows how merchant accounts are included in company-level webhooks. Possible values:
 * * **includeAccounts**
 * * **excludeAccounts**
 * * **allAccounts**: Includes all merchant accounts, and does not require specifying
 *   `filterMerchantAccounts`.
 */
export const FilterMerchantAccountType1 = {
  AllAccounts: "allAccounts",
  ExcludeAccounts: "excludeAccounts",
  IncludeAccounts: "includeAccounts",
} as const;
export type FilterMerchantAccountType1 =
  | (typeof FilterMerchantAccountType1)[keyof typeof FilterMerchantAccountType1]
  | (string & {});

export const filterMerchantAccountType1Schema: EnumSchema<FilterMerchantAccountType1> =
  s.enumOf<FilterMerchantAccountType1>(FilterMerchantAccountType1);

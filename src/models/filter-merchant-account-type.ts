import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shows how merchant accounts are filtered when configuring the webhook.
 *
 * Possible values:
 * * **allAccounts** : Includes all merchant accounts, and does not require specifying
 *   `filterMerchantAccounts`.
 * * **includeAccounts** : The webhook is configured for the merchant accounts listed in
 *   `filterMerchantAccounts`.
 * * **excludeAccounts** : The webhook is not configured for the merchant accounts listed in
 *   `filterMerchantAccounts`.
 */
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

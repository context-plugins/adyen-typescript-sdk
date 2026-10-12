import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shows how merchant accounts are filtered when configuring the webhook. Possible values:
 * * **includeAccounts**: The webhook is configured for the merchant accounts listed in
 *   `filterMerchantAccounts`.
 * * **excludeAccounts**: The webhook is not configured for the merchant accounts listed in
 *   `filterMerchantAccounts`.
 * * **allAccounts**: Includes all merchant accounts, and does not require specifying
 *   `filterMerchantAccounts`.
 */
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

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the transaction fee due to Adyen under [Interchange ++
 * pricing](https://www.adyen.com/what-is-interchange) from the specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
 */
export const AdyenMarkup = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AdyenMarkup = (typeof AdyenMarkup)[keyof typeof AdyenMarkup] | (string & {});

export const adyenMarkupSchema: EnumSchema<AdyenMarkup> = s.enumOf<AdyenMarkup>(AdyenMarkup);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount of the split item.
 *
 * * Required for all split types in the [Classic Platforms
 *   integration](https://docs.adyen.com/classic-platforms).
 * * Required if `type` is **BalanceAccount**, **Commission**, **Surcharge**, **Default**, or
 *   **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)
 *   integration., The amount of the split item.
 *
 * * Required for all split types in the [Classic Platforms
 *   integration](https://docs.adyen.com/classic-platforms).
 * * Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your
 *   [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.
 */
export type SplitAmount = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the
   * original payment currency.
   */
  currency?: string;
  /**
   * The value of the split amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  value: number;
};

export const splitAmountSchema: Schema<SplitAmount> = s.object<SplitAmount>({
  currency: s.optional(s.string()),
  value: s.int(),
});

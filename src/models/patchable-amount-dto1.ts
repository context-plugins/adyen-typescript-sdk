import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up
 * is initiated.
 */
export type PatchableAmountDto1 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency?: string;
  /**
   * The amount of the transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  value?: number;
};

export const patchableAmountDto1Schema: Schema<PatchableAmountDto1> = s.object<PatchableAmountDto1>({
  currency: s.optional(s.string()),
  value: s.optional(s.int()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For a billing plan where the payment amount is fixed, the amount the shopper will be charged for
 * each recurring payment.
 */
export type Amount43 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the
   * amount.
   */
  currency: string;
  /**
   * The numeric value of the amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes#minor-units).
   */
  value: number;
};

export const amount43Schema: Schema<Amount43> = s.object<Amount43>({
  currency: s.string(),
  value: s.int(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The updated final payment amount. This amount is the item total plus the shipping costs of the
 * selected `deliveryMethod`.
 */
export type Amount44 = {
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

export const amount44Schema: Schema<Amount44> = s.object<Amount44>({
  currency: s.string(),
  value: s.int(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For a billing plan where the payment amounts are variable, the minimum amount to charge the
 * shopper for each recurring payment. When a shopper approves the billing plan, they can also
 * specify a maximum amount in their banking app.
 */
export type Amount42 = {
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

export const amount42Schema: Schema<Amount42> = s.object<Amount42>({
  currency: s.string(),
  value: s.int(),
});

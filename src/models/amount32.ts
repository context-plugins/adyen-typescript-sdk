import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Required for transactions performed by registered payment facilitators. The amount of the payment
 * corresponding to each sub-merchant. This value will be different than the request amount if
 * shopper is purchasing items at different sub-merchants' shops.
 */
export type Amount32 = {
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

export const amount32Schema: Schema<Amount32> = s.object<Amount32>({
  currency: s.string(),
  value: s.int(),
});

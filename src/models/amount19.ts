import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object specifying the currency and value for which you want to perform an exchange
 * calculation.
 */
export type Amount19 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  currency: string;
  /**
   * The amount of the transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes#minor-units).
   */
  value: number;
};

export const amount19Schema: Schema<Amount19> = s.object<Amount19>({
  currency: s.string(),
  value: s.int(),
});

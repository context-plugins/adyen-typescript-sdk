import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The balance for the payment method. */
export type Amount8 = {
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

export const amount8Schema: Schema<Amount8> = s.object<Amount8>({
  currency: s.string(),
  value: s.int(),
});

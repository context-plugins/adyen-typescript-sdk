import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount of the bank transfer. */
export type Amount10 = {
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

export const amount10Schema: Schema<Amount10> = s.object<Amount10>({
  currency: s.string(),
  value: s.int(),
});

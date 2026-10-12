import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The updated amount. */
export type Amount30 = {
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

export const amount30Schema: Schema<Amount30> = s.object<Amount30>({
  currency: s.string(),
  value: s.int(),
});

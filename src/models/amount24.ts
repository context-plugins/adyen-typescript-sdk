import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The cost of this delivery method. */
export type Amount24 = {
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

export const amount24Schema: Schema<Amount24> = s.object<Amount24>({
  currency: s.string(),
  value: s.int(),
});

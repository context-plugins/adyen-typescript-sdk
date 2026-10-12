import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The total amount (initial plus surcharge amount). */
export type Amount16 = {
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

export const amount16Schema: Schema<Amount16> = s.object<Amount16>({
  currency: s.string(),
  value: s.int(),
});

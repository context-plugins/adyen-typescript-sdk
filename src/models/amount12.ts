import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The initial amount of the order. */
export type Amount12 = {
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

export const amount12Schema: Schema<Amount12> = s.object<Amount12>({
  currency: s.string(),
  value: s.int(),
});

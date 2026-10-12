import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The maximum spendable balance for a single transaction. Applicable to some gift cards. */
export type Amount9 = {
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

export const amount9Schema: Schema<Amount9> = s.object<Amount9>({
  currency: s.string(),
  value: s.int(),
});

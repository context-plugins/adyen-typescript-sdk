import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Currency = {
  /**
   * Surcharge amount per transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount?: number;
  /**
   * Three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes). For example, **AUD**.
   */
  currencyCode: string;
  /**
   * The maximum surcharge amount per transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  maxAmount?: number;
  /**
   * Surcharge percentage per transaction. The maximum number of decimal places is two. For example,
   * **1%** or **2.27%**.
   */
  percentage?: number;
};

export const currencySchema: Schema<Currency> = s.object<Currency>({
  amount: s.optional(s.int()),
  currencyCode: s.string(),
  maxAmount: s.optional(s.int()),
  percentage: s.optional(s.float64()),
});

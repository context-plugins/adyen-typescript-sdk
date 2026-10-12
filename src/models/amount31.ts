import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount that you want to capture. The `currency` must match the currency used in
 * authorisation, the `value` must be smaller than or equal to the authorised amount.
 */
export type Amount31 = {
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

export const amount31Schema: Schema<Amount31> = s.object<Amount31>({
  currency: s.string(),
  value: s.int(),
});

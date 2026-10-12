import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * If you want a [BIN or card
 * verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification)
 * request to use a non-zero value, assign this value to `additionalAmount` (while the amount must
 * be still set to 0 to trigger BIN or card verification). Required to be in the same currency as
 * the `amount`.
 */
export type Amount1 = {
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

export const amount1Schema: Schema<Amount1> = s.object<Amount1>({
  currency: s.string(),
  value: s.int(),
});

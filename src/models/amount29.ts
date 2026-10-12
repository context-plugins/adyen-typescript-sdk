import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The updated amount. The `currency` must match the currency used in authorisation. */
export type Amount29 = {
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

export const amount29Schema: Schema<Amount29> = s.object<Amount29>({
  currency: s.string(),
  value: s.int(),
});

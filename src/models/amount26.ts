import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Authorised amount in the transaction. */
export type Amount26 = {
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

export const amount26Schema: Schema<Amount26> = s.object<Amount26>({
  currency: s.string(),
  value: s.int(),
});

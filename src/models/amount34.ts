import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object specifying the currency and value to which you want to convert the source amount (the
 * target amount).
 */
export type Amount34 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  currency: string;
  /**
   * The amount of the transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes#minor-units).
   */
  value: number;
};

export const amount34Schema: Schema<Amount34> = s.object<Amount34>({
  currency: s.string(),
  value: s.int(),
});

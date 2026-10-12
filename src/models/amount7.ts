import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s). */
export type Amount7 = {
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

export const amount7Schema: Schema<Amount7> = s.object<Amount7>({
  currency: s.string(),
  value: s.int(),
});

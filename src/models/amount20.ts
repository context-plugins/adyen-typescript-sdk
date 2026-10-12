import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount20 = {
  /**
   * The three-character [ISO 4217 currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  currency: string;
  /**
   * The amount of the transaction in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes#minor-units) (cents).
   */
  value: number;
};

export const amount20Schema: Schema<Amount20> = s.object<Amount20>({
  currency: s.string(),
  value: s.int(),
});

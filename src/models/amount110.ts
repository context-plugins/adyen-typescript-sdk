import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount of the payment. */
export type Amount110 = {
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

export const amount110Schema: Schema<Amount110> = s.object<Amount110>({
  currency: s.string(),
  value: s.int(),
});

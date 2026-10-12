import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The currency of the amount you converted (the source amount). */
export type Amount22 = {
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

export const amount22Schema: Schema<Amount22> = s.object<Amount22>({
  currency: s.string(),
  value: s.int(),
});

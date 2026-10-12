import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount information for the transaction (in [minor
 * units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card
 * verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification)
 * requests, set amount to 0 (zero).
 */
export type Amount2 = {
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

export const amount2Schema: Schema<Amount2> = s.object<Amount2>({
  currency: s.string(),
  value: s.int(),
});

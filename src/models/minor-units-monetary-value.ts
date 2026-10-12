import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MinorUnitsMonetaryValue = {
  /**
   * The transaction amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount?: number;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currencyCode?: string;
};

export const minorUnitsMonetaryValueSchema: Schema<MinorUnitsMonetaryValue> =
  s.object<MinorUnitsMonetaryValue>({
    amount: s.optional(s.int()),
    currencyCode: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationAmount = {
  /**
   * The donation amounts in minor units. The list must contain at least one amount and no more than
   * three amounts.
   */
  amounts: number[];
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  currencyCode: string;
};

export const donationAmountSchema: Schema<DonationAmount> = s.object<DonationAmount>({
  amounts: s.array(s.int()),
  currencyCode: s.string(),
});

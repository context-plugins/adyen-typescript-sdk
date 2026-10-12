import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The default amount for donations. */
export type DonationAmount1 = {
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

export const donationAmount1Schema: Schema<DonationAmount1> = s.object<DonationAmount1>({
  amounts: s.array(s.int()),
  currencyCode: s.string(),
});

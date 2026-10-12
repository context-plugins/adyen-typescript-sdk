import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationAmountUpdate = {
  /**
   * The donation amounts in minor units. The list must contain at least one amount and no more than
   * three amounts.
   */
  amounts?: number[];
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  currencyCode?: string;
};

export const donationAmountUpdateSchema: Schema<DonationAmountUpdate> = s.object<DonationAmountUpdate>({
  amounts: s.optional(s.array(s.int())),
  currencyCode: s.optional(s.string()),
});

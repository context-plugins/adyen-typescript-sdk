import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmountSchema, type DonationAmount } from "./donation-amount.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type OnlineDonationSettingsResponse = {
  /**
   * The currency and fixed amounts for donations. We automatically add calculated amounts in other
   * currencies for participating stores that use a different currency than the default.
   */
  amounts?: DonationAmount[];
  /**
   * The currency that was used in the request to set fixed donation amounts. Format:
   * three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).
   */
  defaultCurrency?: string;
  /**
   * The type of donation to collect from the shopper. Possible values:
   *
   * - **roundup**: Round up the transaction amount.
   *
   * - **fixedAmounts**: Choose a fixed amount.
   *
   * - **fixedAmountsRoundup**: Round up, or choose a fixed amount.
   */
  donationType?: DonationType1;
  /**
   * The merchant accounts for this sales channel that are associated with the donation campaign.
   */
  merchantAccounts?: string[];
  /**
   * The Adyen-generated unique identifiers of stores for this sales channel that are associated
   * with the donation campaign.
   */
  storeIds?: string[];
};

export const onlineDonationSettingsResponseSchema: Schema<OnlineDonationSettingsResponse> =
  s.object<OnlineDonationSettingsResponse>({
    amounts: s.optional(s.array(s.lazy(() => donationAmountSchema))),
    defaultCurrency: s.optional(s.string()),
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    storeIds: s.optional(s.array(s.string())),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmount1Schema, type DonationAmount1 } from "./donation-amount1.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

/** The settings for online donations collected as part of the campaign. */
export type OnlineDonationSettings2 = {
  /** The default amount for donations. */
  defaultAmount?: DonationAmount1;
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

export const onlineDonationSettings2Schema: Schema<OnlineDonationSettings2> =
  s.object<OnlineDonationSettings2>({
    defaultAmount: s.optional(s.lazy(() => donationAmount1Schema)),
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    storeIds: s.optional(s.array(s.string())),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmountUpdateSchema, type DonationAmountUpdate } from "./donation-amount-update.js";
import { donationTypeSchema, type DonationType } from "./donation-type.js";

export type OnlineDonationSettingsUpdate = {
  /** The default amount for donations. */
  defaultAmount?: DonationAmountUpdate | null;
  /**
   * The type of donation to collect from the shopper. Possible values:
   *
   * - **roundup**: Round up the transaction amount.
   *
   * - **fixedAmounts**: Choose a fixed amount.
   *
   * - **fixedAmountsRoundup**: Round up, or choose a fixed amount.
   */
  donationType?: DonationType | null;
  /**
   * The merchant accounts for this sales channel that are associated with the donation campaign.
   */
  merchantAccounts?: string[] | null;
  /**
   * The Adyen-generated unique identifiers of stores for this sales channel that are associated
   * with the donation campaign.
   */
  storeIds?: string[] | null;
};

export const onlineDonationSettingsUpdateSchema: Schema<OnlineDonationSettingsUpdate> =
  s.object<OnlineDonationSettingsUpdate>({
    defaultAmount: s.optionalNullable(s.lazy(() => donationAmountUpdateSchema)),
    donationType: s.optionalNullable(s.lazy(() => donationTypeSchema)),
    merchantAccounts: s.optionalNullable(s.array(s.string())),
    storeIds: s.optionalNullable(s.array(s.string())),
  });

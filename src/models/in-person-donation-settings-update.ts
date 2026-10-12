import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField2Schema, type DisplayTextField2 } from "./display-text-field2.js";
import { donationAmountUpdateSchema, type DonationAmountUpdate } from "./donation-amount-update.js";
import { donationFlow1Schema, type DonationFlow1 } from "./donation-flow1.js";
import { donationTypeSchema, type DonationType } from "./donation-type.js";

export type InPersonDonationSettingsUpdate = {
  /** The default amount for donations. */
  defaultAmount?: DonationAmountUpdate | null;
  /**
   * The text shown on the payment terminal, either the name or the cause of the nonprofit
   * organization.
   */
  displayTextField?: DisplayTextField2;
  /**
   * The interaction flow for in-person donations. Possible values:
   *
   * - **oneStep**: The shopper presents their payment method for the payment and the donation in
   *   one go, after the donation.
   *
   * - **twoStep**: The shopper presents their payment method twice: after the payment and after the
   *   donation.
   */
  donationFlow?: DonationFlow1;
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
   * Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal
   * waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to
   * 15000.
   */
  presentCardTimeoutMs?: number | null;
  /**
   * The time, in milliseconds, that the terminal waits for the shopper to make a selection on the
   * donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000.
   */
  promptTimeoutMs?: number | null;
  /**
   * The Adyen-generated unique identifiers of stores for this sales channel that are associated
   * with the donation campaign.
   */
  storeIds?: string[] | null;
};

export const inPersonDonationSettingsUpdateSchema: Schema<InPersonDonationSettingsUpdate> =
  s.object<InPersonDonationSettingsUpdate>({
    defaultAmount: s.optionalNullable(s.lazy(() => donationAmountUpdateSchema)),
    displayTextField: s.optional(s.lazy(() => displayTextField2Schema)),
    donationFlow: s.optional(s.lazy(() => donationFlow1Schema)),
    donationType: s.optionalNullable(s.lazy(() => donationTypeSchema)),
    merchantAccounts: s.optionalNullable(s.array(s.string())),
    presentCardTimeoutMs: s.optionalNullable(s.int()),
    promptTimeoutMs: s.optionalNullable(s.int()),
    storeIds: s.optionalNullable(s.array(s.string())),
  });

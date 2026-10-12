import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField2Schema, type DisplayTextField2 } from "./display-text-field2.js";
import { donationAmount1Schema, type DonationAmount1 } from "./donation-amount1.js";
import { donationFlow1Schema, type DonationFlow1 } from "./donation-flow1.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type InPersonDonationSettings = {
  /** The default amount for donations. */
  defaultAmount?: DonationAmount1;
  /**
   * The text shown on the payment terminal, either the name or the cause of the nonprofit
   * organization.
   */
  displayTextField: DisplayTextField2;
  /**
   * The interaction flow for in-person donations. Possible values:
   *
   * - **oneStep**: The shopper presents their payment method for the payment and the donation in
   *   one go, after the donation.
   *
   * - **twoStep**: The shopper presents their payment method twice: after the payment and after the
   *   donation.
   */
  donationFlow: DonationFlow1;
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
   * Required if `donationFlow` is set to **twoStep**. The time, in milliseconds, that the terminal
   * waits for the shopper to present their card. Defaults to **10000** (10 seconds). Range: 5000 to
   * 15000.
   */
  presentCardTimeoutMs?: number;
  /**
   * The time, in milliseconds, that the terminal waits for the shopper to make a selection on the
   * donation screen. Defaults to **10000** (10 seconds). Range: 5000 to 15000.
   */
  promptTimeoutMs?: number;
  /**
   * The Adyen-generated unique identifiers of stores for this sales channel that are associated
   * with the donation campaign.
   */
  storeIds?: string[];
};

export const inPersonDonationSettingsSchema: Schema<InPersonDonationSettings> =
  s.object<InPersonDonationSettings>({
    defaultAmount: s.optional(s.lazy(() => donationAmount1Schema)),
    displayTextField: displayTextField2Schema,
    donationFlow: donationFlow1Schema,
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    presentCardTimeoutMs: s.optional(s.int()),
    promptTimeoutMs: s.optional(s.int()),
    storeIds: s.optional(s.array(s.string())),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField1Schema, type DisplayTextField1 } from "./display-text-field1.js";
import { donationAmountSchema, type DonationAmount } from "./donation-amount.js";
import { donationFlow4Schema, type DonationFlow4 } from "./donation-flow4.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type InPersonDonationSettingsResponse = {
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
  /** The text shown on the payment terminal, asking the shopper for a donation. */
  displayTextField?: DisplayTextField1;
  /**
   * The interaction flow for in-person donations: complete payment for the purchase and the
   * donation in one go, or separately.
   */
  donationFlow?: DonationFlow4;
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
  /** The time, in milliseconds, that the terminal waits for the shopper to present their card. */
  presentCardTimeoutMs?: number;
  /**
   * The time, in milliseconds, that the terminal waits for the shopper to respond to the text
   * asking for a donation.
   */
  promptTimeoutMs?: number;
  /**
   * The Adyen-generated unique identifiers of stores for this sales channel that are associated
   * with the donation campaign.
   */
  storeIds?: string[];
};

export const inPersonDonationSettingsResponseSchema: Schema<InPersonDonationSettingsResponse> =
  s.object<InPersonDonationSettingsResponse>({
    amounts: s.optional(s.array(s.lazy(() => donationAmountSchema))),
    defaultCurrency: s.optional(s.string()),
    displayTextField: s.optional(s.lazy(() => displayTextField1Schema)),
    donationFlow: s.optional(s.lazy(() => donationFlow4Schema)),
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    presentCardTimeoutMs: s.optional(s.int()),
    promptTimeoutMs: s.optional(s.int()),
    storeIds: s.optional(s.array(s.string())),
  });

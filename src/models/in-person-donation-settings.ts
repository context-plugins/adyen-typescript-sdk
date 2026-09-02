import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField2Schema, type DisplayTextField2 } from "./display-text-field2.js";
import { donationAmount1Schema, type DonationAmount1 } from "./donation-amount1.js";
import { donationFlow1Schema, type DonationFlow1 } from "./donation-flow1.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type InPersonDonationSettings = {
  defaultAmount?: DonationAmount1;
  displayTextField: DisplayTextField2;
  donationFlow: DonationFlow1;
  donationType?: DonationType1;
  merchantAccounts?: string[];
  presentCardTimeoutMs?: number;
  promptTimeoutMs?: number;
  storeIds?: string[];
};

export const inPersonDonationSettingsSchema: Schema<InPersonDonationSettings> =
  s.object<InPersonDonationSettings>({
    defaultAmount: s.optional(s.lazy(() => donationAmount1Schema)),
    displayTextField: displayTextField2Schema,
    donationFlow: donationFlow1Schema,
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    presentCardTimeoutMs: s.optional(s.number()),
    promptTimeoutMs: s.optional(s.number()),
    storeIds: s.optional(s.array(s.string())),
  });

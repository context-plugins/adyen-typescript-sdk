import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField1Schema, type DisplayTextField1 } from "./display-text-field1.js";
import { donationAmountSchema, type DonationAmount } from "./donation-amount.js";
import { donationFlow4Schema, type DonationFlow4 } from "./donation-flow4.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type InPersonDonationSettingsResponse = {
  amounts?: DonationAmount[];
  defaultCurrency?: string;
  displayTextField?: DisplayTextField1;
  donationFlow?: DonationFlow4;
  donationType?: DonationType1;
  merchantAccounts?: string[];
  presentCardTimeoutMs?: number;
  promptTimeoutMs?: number;
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
    presentCardTimeoutMs: s.optional(s.number()),
    promptTimeoutMs: s.optional(s.number()),
    storeIds: s.optional(s.array(s.string())),
  });

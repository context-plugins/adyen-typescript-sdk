import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayTextField2Schema, type DisplayTextField2 } from "./display-text-field2.js";
import { donationAmountUpdateSchema, type DonationAmountUpdate } from "./donation-amount-update.js";
import { donationFlow1Schema, type DonationFlow1 } from "./donation-flow1.js";
import { donationTypeSchema, type DonationType } from "./donation-type.js";

export type InPersonDonationSettingsUpdate = {
  defaultAmount?: DonationAmountUpdate | null;
  displayTextField?: DisplayTextField2;
  donationFlow?: DonationFlow1;
  donationType?: DonationType | null;
  merchantAccounts?: string[] | null;
  presentCardTimeoutMs?: number | null;
  promptTimeoutMs?: number | null;
  storeIds?: string[] | null;
};

export const inPersonDonationSettingsUpdateSchema: Schema<InPersonDonationSettingsUpdate> =
  s.object<InPersonDonationSettingsUpdate>({
    defaultAmount: s.optionalNullable(s.lazy(() => donationAmountUpdateSchema)),
    displayTextField: s.optional(s.lazy(() => displayTextField2Schema)),
    donationFlow: s.optional(s.lazy(() => donationFlow1Schema)),
    donationType: s.optionalNullable(s.lazy(() => donationTypeSchema)),
    merchantAccounts: s.optionalNullable(s.array(s.string())),
    presentCardTimeoutMs: s.optionalNullable(s.number()),
    promptTimeoutMs: s.optionalNullable(s.number()),
    storeIds: s.optionalNullable(s.array(s.string())),
  });

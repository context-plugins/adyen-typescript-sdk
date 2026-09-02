import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmountSchema, type DonationAmount } from "./donation-amount.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type OnlineDonationSettingsResponse2 = {
  amounts?: DonationAmount[];
  defaultCurrency?: string;
  donationType?: DonationType1;
  merchantAccounts?: string[];
  storeIds?: string[];
};

export const onlineDonationSettingsResponse2Schema: Schema<OnlineDonationSettingsResponse2> =
  s.object<OnlineDonationSettingsResponse2>({
    amounts: s.optional(s.array(s.lazy(() => donationAmountSchema))),
    defaultCurrency: s.optional(s.string()),
    donationType: s.optional(s.lazy(() => donationType1Schema)),
    merchantAccounts: s.optional(s.array(s.string())),
    storeIds: s.optional(s.array(s.string())),
  });

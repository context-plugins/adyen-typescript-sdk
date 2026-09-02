import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmountSchema, type DonationAmount } from "./donation-amount.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type OnlineDonationSettingsResponse = {
  amounts?: DonationAmount[];
  defaultCurrency?: string;
  donationType?: DonationType1;
  merchantAccounts?: string[];
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

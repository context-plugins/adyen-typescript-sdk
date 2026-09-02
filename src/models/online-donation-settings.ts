import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmount1Schema, type DonationAmount1 } from "./donation-amount1.js";
import { donationType1Schema, type DonationType1 } from "./donation-type1.js";

export type OnlineDonationSettings = {
  defaultAmount?: DonationAmount1;
  donationType?: DonationType1;
  merchantAccounts?: string[];
  storeIds?: string[];
};

export const onlineDonationSettingsSchema: Schema<OnlineDonationSettings> = s.object<OnlineDonationSettings>({
  defaultAmount: s.optional(s.lazy(() => donationAmount1Schema)),
  donationType: s.optional(s.lazy(() => donationType1Schema)),
  merchantAccounts: s.optional(s.array(s.string())),
  storeIds: s.optional(s.array(s.string())),
});

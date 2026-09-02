import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationAmountUpdateSchema, type DonationAmountUpdate } from "./donation-amount-update.js";
import { donationTypeSchema, type DonationType } from "./donation-type.js";

export type OnlineDonationSettingsUpdate = {
  defaultAmount?: DonationAmountUpdate | null;
  donationType?: DonationType | null;
  merchantAccounts?: string[] | null;
  storeIds?: string[] | null;
};

export const onlineDonationSettingsUpdateSchema: Schema<OnlineDonationSettingsUpdate> =
  s.object<OnlineDonationSettingsUpdate>({
    defaultAmount: s.optionalNullable(s.lazy(() => donationAmountUpdateSchema)),
    donationType: s.optionalNullable(s.lazy(() => donationTypeSchema)),
    merchantAccounts: s.optionalNullable(s.array(s.string())),
    storeIds: s.optionalNullable(s.array(s.string())),
  });

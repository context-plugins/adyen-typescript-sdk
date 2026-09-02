import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inPersonDonationSettingsUpdateSchema,
  type InPersonDonationSettingsUpdate,
} from "./in-person-donation-settings-update.js";
import {
  onlineDonationSettingsUpdateSchema,
  type OnlineDonationSettingsUpdate,
} from "./online-donation-settings-update.js";

export type DonationCampaignUpdate = {
  accountHolderIds?: string[] | null;
  inPerson?: InPersonDonationSettingsUpdate | null;
  name?: string;
  online?: OnlineDonationSettingsUpdate | null;
};

export const donationCampaignUpdateSchema: Schema<DonationCampaignUpdate> = s.object<DonationCampaignUpdate>({
  accountHolderIds: s.optionalNullable(s.array(s.string())),
  inPerson: s.optionalNullable(s.lazy(() => inPersonDonationSettingsUpdateSchema)),
  name: s.optional(s.string()),
  online: s.optionalNullable(s.lazy(() => onlineDonationSettingsUpdateSchema)),
});

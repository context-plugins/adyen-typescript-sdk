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
  /** The unique identifiers of the account holders associated with the donation campaign. */
  accountHolderIds?: string[] | null;
  /** The settings for in-person donations collected as part of the campaign. */
  inPerson?: InPersonDonationSettingsUpdate | null;
  /** The name of the donation campaign. */
  name?: string;
  /** The settings for online donations collected as part of the campaign. */
  online?: OnlineDonationSettingsUpdate | null;
};

export const donationCampaignUpdateSchema: Schema<DonationCampaignUpdate> = s.object<DonationCampaignUpdate>({
  accountHolderIds: s.optionalNullable(s.array(s.string())),
  inPerson: s.optionalNullable(s.lazy(() => inPersonDonationSettingsUpdateSchema)),
  name: s.optional(s.string()),
  online: s.optionalNullable(s.lazy(() => onlineDonationSettingsUpdateSchema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  donationCampaignNonprofitCause2Schema,
  type DonationCampaignNonprofitCause2,
} from "./donation-campaign-nonprofit-cause2.js";
import { donationCampaignStatus2Schema, type DonationCampaignStatus2 } from "./donation-campaign-status2.js";
import {
  inPersonDonationSettingsResponse2Schema,
  type InPersonDonationSettingsResponse2,
} from "./in-person-donation-settings-response2.js";
import {
  onlineDonationSettingsResponse2Schema,
  type OnlineDonationSettingsResponse2,
} from "./online-donation-settings-response2.js";

export type DonationCampaign1 = {
  accountHolderIds?: string[];
  activatedAt?: Date;
  endedAt?: Date;
  id: string;
  inPerson?: InPersonDonationSettingsResponse2;
  name: string;
  nonprofitCause: DonationCampaignNonprofitCause2;
  online?: OnlineDonationSettingsResponse2;
  status: DonationCampaignStatus2;
};

export const donationCampaign1Schema: Schema<DonationCampaign1> = s.object<DonationCampaign1>({
  accountHolderIds: s.optional(s.array(s.string())),
  activatedAt: s.optional(s.dateTime()),
  endedAt: s.optional(s.dateTime()),
  id: s.string(),
  inPerson: s.optional(s.lazy(() => inPersonDonationSettingsResponse2Schema)),
  name: s.string(),
  nonprofitCause: donationCampaignNonprofitCause2Schema,
  online: s.optional(s.lazy(() => onlineDonationSettingsResponse2Schema)),
  status: donationCampaignStatus2Schema,
});

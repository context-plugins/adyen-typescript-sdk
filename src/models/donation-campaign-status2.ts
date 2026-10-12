import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the donation campaign. */
export const DonationCampaignStatus2 = {
  Active: "active",
  Inactive: "inactive",
  Ended: "ended",
} as const;
export type DonationCampaignStatus2 =
  | (typeof DonationCampaignStatus2)[keyof typeof DonationCampaignStatus2]
  | (string & {});

export const donationCampaignStatus2Schema: EnumSchema<DonationCampaignStatus2> =
  s.enumOf<DonationCampaignStatus2>(DonationCampaignStatus2);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DonationCampaignStatus = {
  Active: "active",
  Inactive: "inactive",
  Ended: "ended",
} as const;
export type DonationCampaignStatus =
  | (typeof DonationCampaignStatus)[keyof typeof DonationCampaignStatus]
  | (string & {});

export const donationCampaignStatusSchema: EnumSchema<DonationCampaignStatus> =
  s.enumOf<DonationCampaignStatus>(DonationCampaignStatus);

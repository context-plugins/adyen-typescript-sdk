import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationCampaignSchema, type DonationCampaign } from "./donation-campaign.js";

export type DonationCampaignsResponse = {
  /** List of active donation campaigns for your merchant account. */
  donationCampaigns?: DonationCampaign[];
};

export const donationCampaignsResponseSchema: Schema<DonationCampaignsResponse> =
  s.object<DonationCampaignsResponse>({
    donationCampaigns: s.optional(s.array(s.lazy(() => donationCampaignSchema))),
  });

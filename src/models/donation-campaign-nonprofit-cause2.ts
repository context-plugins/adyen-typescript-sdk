import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationCampaignNonprofitCause2 = {
  bannerUrl?: string;
  causeId?: string;
  description?: string;
  globalWebsiteUrl?: string;
  goals?: string[];
  logoUrl?: string;
  nonprofitName?: string;
  termsAndConditionsUrl?: string;
};

export const donationCampaignNonprofitCause2Schema: Schema<DonationCampaignNonprofitCause2> =
  s.object<DonationCampaignNonprofitCause2>({
    bannerUrl: s.optional(s.string()),
    causeId: s.optional(s.string()),
    description: s.optional(s.string()),
    globalWebsiteUrl: s.optional(s.string()),
    goals: s.optional(s.array(s.string())),
    logoUrl: s.optional(s.string()),
    nonprofitName: s.optional(s.string()),
    termsAndConditionsUrl: s.optional(s.string()),
  });

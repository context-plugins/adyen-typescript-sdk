import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationCampaignNonprofitCause = {
  bannerUrl?: string;
  causeId?: string;
  description?: string;
  globalWebsiteUrl?: string;
  goals?: string[];
  logoUrl?: string;
  nonprofitName?: string;
  termsAndConditionsUrl?: string;
};

export const donationCampaignNonprofitCauseSchema: Schema<DonationCampaignNonprofitCause> =
  s.object<DonationCampaignNonprofitCause>({
    bannerUrl: s.optional(s.string()),
    causeId: s.optional(s.string()),
    description: s.optional(s.string()),
    globalWebsiteUrl: s.optional(s.string()),
    goals: s.optional(s.array(s.string())),
    logoUrl: s.optional(s.string()),
    nonprofitName: s.optional(s.string()),
    termsAndConditionsUrl: s.optional(s.string()),
  });

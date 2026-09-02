import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amounts1Schema, type Amounts1 } from "./amounts1.js";
import { donation1Schema, type Donation1 } from "./donation1.js";

export type DonationCampaign = {
  amounts?: Amounts1;
  bannerUrl?: string;
  campaignName?: string;
  causeName?: string;
  donation?: Donation1;
  id?: string;
  logoUrl?: string;
  nonprofitDescription?: string;
  nonprofitName?: string;
  nonprofitUrl?: string;
  termsAndConditionsUrl?: string;
};

export const donationCampaignSchema: Schema<DonationCampaign> = s.object<DonationCampaign>({
  amounts: s.optional(s.lazy(() => amounts1Schema)),
  bannerUrl: s.optional(s.string()),
  campaignName: s.optional(s.string()),
  causeName: s.optional(s.string()),
  donation: s.optional(s.lazy(() => donation1Schema)),
  id: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
  nonprofitDescription: s.optional(s.string()),
  nonprofitName: s.optional(s.string()),
  nonprofitUrl: s.optional(s.string()),
  termsAndConditionsUrl: s.optional(s.string()),
});

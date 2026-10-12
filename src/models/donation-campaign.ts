import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amounts1Schema, type Amounts1 } from "./amounts1.js";
import { donation1Schema, type Donation1 } from "./donation1.js";

export type DonationCampaign = {
  /** The object that contains the fixed donation amounts that the shopper can select from. */
  amounts?: Amounts1;
  /** The URL for the banner of the nonprofit or campaign. */
  bannerUrl?: string;
  /** The name of the donation campaign.. */
  campaignName?: string;
  /** The cause of the nonprofit. */
  causeName?: string;
  /** The object that contains the details of the donation. */
  donation?: Donation1;
  /** The unique campaign ID of the donation campaign. */
  id?: string;
  /** The URL for the logo of the nonprofit. */
  logoUrl?: string;
  /** The description of the nonprofit. */
  nonprofitDescription?: string;
  /** The name of the nonprofit organization that receives the donation. */
  nonprofitName?: string;
  /** The website URL of the nonprofit. */
  nonprofitUrl?: string;
  /** The URL of the terms and conditions page of the nonprofit and the campaign. */
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

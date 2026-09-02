import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationCampaignsRequest = {
  currency: string;
  locale?: string;
  merchantAccount: string;
  store?: string;
};

export const donationCampaignsRequestSchema: Schema<DonationCampaignsRequest> =
  s.object<DonationCampaignsRequest>({
    currency: s.string(),
    locale: s.optional(s.string()),
    merchantAccount: s.string(),
    store: s.optional(s.string()),
  });

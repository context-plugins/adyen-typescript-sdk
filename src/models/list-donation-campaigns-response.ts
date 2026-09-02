import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationCampaign1Schema, type DonationCampaign1 } from "./donation-campaign1.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListDonationCampaignsResponse = {
  links?: PaginationLinks1;
  campaigns?: DonationCampaign1[];
  itemsTotal: number;
  pagesTotal: number;
};

export const listDonationCampaignsResponseSchema: Schema<ListDonationCampaignsResponse> =
  s.object<ListDonationCampaignsResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    campaigns: s.optional(s.array(s.lazy(() => donationCampaign1Schema))),
    itemsTotal: s.number(),
    pagesTotal: s.number(),
    _keysMap: {
      links: "_links",
    },
  });

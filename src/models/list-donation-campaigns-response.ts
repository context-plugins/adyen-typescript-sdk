import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { donationCampaign1Schema, type DonationCampaign1 } from "./donation-campaign1.js";
import { paginationLinks1Schema, type PaginationLinks1 } from "./pagination-links1.js";

export type ListDonationCampaignsResponse = {
  /** Pagination references. */
  links?: PaginationLinks1;
  /** The list of donation campaigns. */
  campaigns?: DonationCampaign1[];
  /** Total number of items. */
  itemsTotal: number;
  /** Total number of pages. */
  pagesTotal: number;
};

export const listDonationCampaignsResponseSchema: Schema<ListDonationCampaignsResponse> =
  s.object<ListDonationCampaignsResponse>({
    links: s.optional(s.lazy(() => paginationLinks1Schema)),
    campaigns: s.optional(s.array(s.lazy(() => donationCampaign1Schema))),
    itemsTotal: s.int(),
    pagesTotal: s.int(),
    _keysMap: {
      links: "_links",
    },
  });

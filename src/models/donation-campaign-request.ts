import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inPersonDonationSettings2Schema,
  type InPersonDonationSettings2,
} from "./in-person-donation-settings2.js";
import { onlineDonationSettings2Schema, type OnlineDonationSettings2 } from "./online-donation-settings2.js";

export type DonationCampaignRequest = {
  accountHolderIds?: string[];
  inPerson?: InPersonDonationSettings2;
  name: string;
  nonprofitCauseId: string;
  online?: OnlineDonationSettings2;
};

export const donationCampaignRequestSchema: Schema<DonationCampaignRequest> =
  s.object<DonationCampaignRequest>({
    accountHolderIds: s.optional(s.array(s.string())),
    inPerson: s.optional(s.lazy(() => inPersonDonationSettings2Schema)),
    name: s.string(),
    nonprofitCauseId: s.string(),
    online: s.optional(s.lazy(() => onlineDonationSettings2Schema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inPersonDonationSettings2Schema,
  type InPersonDonationSettings2,
} from "./in-person-donation-settings2.js";
import { onlineDonationSettings2Schema, type OnlineDonationSettings2 } from "./online-donation-settings2.js";

export type DonationCampaignRequest = {
  /** The unique identifiers of the account holders associated with the donation campaign. */
  accountHolderIds?: string[];
  /** The settings for in-person donations collected as part of the campaign. */
  inPerson?: InPersonDonationSettings2;
  /** The name of the donation campaign. */
  name: string;
  /** The unique identifier of the nonprofit cause that the campaign supports. */
  nonprofitCauseId: string;
  /** The settings for online donations collected as part of the campaign. */
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

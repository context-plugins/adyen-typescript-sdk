import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CampaignStatusTransition = {
  Activate: "activate",
  End: "end",
} as const;
export type CampaignStatusTransition =
  | (typeof CampaignStatusTransition)[keyof typeof CampaignStatusTransition]
  | (string & {});

export const campaignStatusTransitionSchema: EnumSchema<CampaignStatusTransition> =
  s.enumOf<CampaignStatusTransition>(CampaignStatusTransition);

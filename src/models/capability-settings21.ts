import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { intervalSchema, type Interval } from "./interval.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

/** The settings that are requested for the legal entity. */
export type CapabilitySettings21 = {
  /** The maximum amount a card holder can spend per industry. */
  amountPerIndustry?: Record<string, PatchableAmountDto>;
  /** The number of card holders who can use the card. */
  authorizedCardUsers?: boolean;
  /** The funding source of the card, for example **debit**. */
  fundingSource?: FundingSource[];
  /** The period when the rule conditions apply. */
  interval?: Interval;
  /** The maximum amount a card holder can withdraw per day. */
  maxAmount?: PatchableAmountDto;
};

export const capabilitySettings21Schema: Schema<CapabilitySettings21> = s.object<CapabilitySettings21>({
  amountPerIndustry: s.optional(
    s.record(
      s.string(),
      s.lazy(() => patchableAmountDtoSchema),
    ),
  ),
  authorizedCardUsers: s.optional(s.boolean()),
  fundingSource: s.optional(s.array(s.lazy(() => fundingSourceSchema))),
  interval: s.optional(s.lazy(() => intervalSchema)),
  maxAmount: s.optional(s.lazy(() => patchableAmountDtoSchema)),
});

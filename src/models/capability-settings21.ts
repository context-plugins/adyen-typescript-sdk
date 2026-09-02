import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { intervalSchema, type Interval } from "./interval.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";

export type CapabilitySettings21 = {
  amountPerIndustry?: Record<string, PatchableAmountDto>;
  authorizedCardUsers?: boolean;
  fundingSource?: FundingSource[];
  interval?: Interval;
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

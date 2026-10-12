import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { intervalSchema, type Interval } from "./interval.js";

/** A JSON object containing the settings that are allowed for the account holder. */
export type CapabilitySettings3 = {
  amountPerIndustry?: Record<string, Amount17>;
  authorizedCardUsers?: boolean;
  fundingSource?: FundingSource[];
  interval?: Interval;
  maxAmount?: Amount17;
};

export const capabilitySettings3Schema: Schema<CapabilitySettings3> = s.object<CapabilitySettings3>({
  amountPerIndustry: s.optional(
    s.record(
      s.string(),
      s.lazy(() => amount17Schema),
    ),
  ),
  authorizedCardUsers: s.optional(s.boolean()),
  fundingSource: s.optional(s.array(s.lazy(() => fundingSourceSchema))),
  interval: s.optional(s.lazy(() => intervalSchema)),
  maxAmount: s.optional(s.lazy(() => amount17Schema)),
});

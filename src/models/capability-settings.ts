import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { intervalSchema, type Interval } from "./interval.js";

export type CapabilitySettings = {
  amountPerIndustry?: Record<string, Amount17>;
  authorizedCardUsers?: boolean;
  fundingSource?: FundingSource[];
  interval?: Interval;
  maxAmount?: Amount17;
};

export const capabilitySettingsSchema: Schema<CapabilitySettings> = s.object<CapabilitySettings>({
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

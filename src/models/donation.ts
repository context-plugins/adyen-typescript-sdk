import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Donation = {
  currency: string;
  donationType?: string;
  maxRoundupAmount?: number;
  type: string;
  values?: number[];
};

export const donationSchema: Schema<Donation> = s.object<Donation>({
  currency: s.string(),
  donationType: s.optional(s.string()),
  maxRoundupAmount: s.optional(s.number()),
  type: s.string(),
  values: s.optional(s.array(s.number())),
});

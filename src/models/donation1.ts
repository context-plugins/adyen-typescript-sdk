import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Donation1 = {
  currency: string;
  donationType?: string;
  maxRoundupAmount?: number;
  type: string;
  values?: number[];
};

export const donation1Schema: Schema<Donation1> = s.object<Donation1>({
  currency: s.string(),
  donationType: s.optional(s.string()),
  maxRoundupAmount: s.optional(s.number()),
  type: s.string(),
  values: s.optional(s.array(s.number())),
});

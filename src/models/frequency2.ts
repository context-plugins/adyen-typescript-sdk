import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The frequency at which the shopper will be charged. */
export const Frequency2 = {
  Weekly: "weekly",
  Monthly: "monthly",
  Quarterly: "quarterly",
  HalfYearly: "half-yearly",
  Yearly: "yearly",
} as const;
export type Frequency2 = (typeof Frequency2)[keyof typeof Frequency2] | (string & {});

export const frequency2Schema: EnumSchema<Frequency2> = s.enumOf<Frequency2>(Frequency2);

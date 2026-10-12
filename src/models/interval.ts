import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The period when the rule conditions apply. */
export const Interval = {
  Daily: "daily",
  Monthly: "monthly",
  Weekly: "weekly",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);

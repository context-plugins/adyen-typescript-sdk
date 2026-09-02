import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Frequency1 = {
  Daily: "daily",
  Weekly: "weekly",
  Weekdays: "weekdays",
  Monthly: "monthly",
} as const;
export type Frequency1 = (typeof Frequency1)[keyof typeof Frequency1] | (string & {});

export const frequency1Schema: EnumSchema<Frequency1> = s.enumOf<Frequency1>(Frequency1);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The time when the payout funds are settled in your user's transfer instrument. */
export type LocalTime2 = {
  hour?: number;
  minute?: number;
  nano?: number;
  second?: number;
};

export const localTime2Schema: Schema<LocalTime2> = s.object<LocalTime2>({
  hour: s.optional(s.int()),
  minute: s.optional(s.int()),
  nano: s.optional(s.int()),
  second: s.optional(s.int()),
});

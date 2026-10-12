import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is
 * set to **monday**.
 *
 * Possible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**.
 */
export const DayOfWeek = {
  Friday: "friday",
  Monday: "monday",
  Saturday: "saturday",
  Sunday: "sunday",
  Thursday: "thursday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
} as const;
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek] | (string & {});

export const dayOfWeekSchema: EnumSchema<DayOfWeek> = s.enumOf<DayOfWeek>(DayOfWeek);

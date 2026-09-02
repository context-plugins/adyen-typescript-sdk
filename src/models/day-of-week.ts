import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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

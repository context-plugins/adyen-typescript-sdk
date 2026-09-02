import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduleType1 = {
  Weekdays: "weekdays",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
export type ScheduleType1 = (typeof ScheduleType1)[keyof typeof ScheduleType1] | (string & {});

export const scheduleType1Schema: EnumSchema<ScheduleType1> = s.enumOf<ScheduleType1>(ScheduleType1);

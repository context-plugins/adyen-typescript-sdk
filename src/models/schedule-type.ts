import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduleType = {
  Weekdays: "weekdays",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType] | (string & {});

export const scheduleTypeSchema: EnumSchema<ScheduleType> = s.enumOf<ScheduleType>(ScheduleType);

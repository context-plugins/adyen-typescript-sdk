import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of schedule at which the top up is executed.
 * * **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance
 *   account.
 *
 * * **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance
 *   account.
 *
 * * **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the
 *   balance account.
 * * **null** (default): continuous monitoring.
 */
export const ScheduleType1 = {
  Weekdays: "weekdays",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
export type ScheduleType1 = (typeof ScheduleType1)[keyof typeof ScheduleType1] | (string & {});

export const scheduleType1Schema: EnumSchema<ScheduleType1> = s.enumOf<ScheduleType1>(ScheduleType1);

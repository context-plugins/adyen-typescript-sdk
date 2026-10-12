import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleType1Schema, type ScheduleType1 } from "./schedule-type1.js";

/** Contains the details about the schedule that determines when the top up is executed. */
export type Schedule21 = {
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
  type: ScheduleType1;
};

export const schedule21Schema: Schema<Schedule21> = s.object<Schedule21>({
  type: scheduleType1Schema,
});

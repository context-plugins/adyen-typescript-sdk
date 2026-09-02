import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleType1Schema, type ScheduleType1 } from "./schedule-type1.js";

export type Schedule21 = {
  type: ScheduleType1;
};

export const schedule21Schema: Schema<Schedule21> = s.object<Schedule21>({
  type: scheduleType1Schema,
});

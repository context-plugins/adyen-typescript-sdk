import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleType1Schema, type ScheduleType1 } from "./schedule-type1.js";

export type Schedule2 = {
  type: ScheduleType1;
};

export const schedule2Schema: Schema<Schedule2> = s.object<Schedule2>({
  type: scheduleType1Schema,
});

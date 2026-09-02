import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleType1Schema, type ScheduleType1 } from "./schedule-type1.js";

export type PatchableSchedule = {
  type?: ScheduleType1;
};

export const patchableScheduleSchema: Schema<PatchableSchedule> = s.object<PatchableSchedule>({
  type: s.optional(s.lazy(() => scheduleType1Schema)),
});

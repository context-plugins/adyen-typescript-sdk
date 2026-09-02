import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeOfDaySchema, type TimeOfDay } from "./time-of-day.js";

export type TimeOfDayRestriction1 = {
  operation: string;
  value?: TimeOfDay;
};

export const timeOfDayRestriction1Schema: Schema<TimeOfDayRestriction1> = s.object<TimeOfDayRestriction1>({
  operation: s.string(),
  value: s.optional(s.lazy(() => timeOfDaySchema)),
});

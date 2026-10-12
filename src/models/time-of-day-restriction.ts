import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeOfDaySchema, type TimeOfDay } from "./time-of-day.js";

export type TimeOfDayRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: TimeOfDay;
};

export const timeOfDayRestrictionSchema: Schema<TimeOfDayRestriction> = s.object<TimeOfDayRestriction>({
  operation: s.string(),
  value: s.optional(s.lazy(() => timeOfDaySchema)),
});

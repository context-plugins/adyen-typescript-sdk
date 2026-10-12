import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeOfDaySchema, type TimeOfDay } from "./time-of-day.js";

/**
 * A start and end time in a time-only ISO-8601 extended offset format. Supported operations:
 * **equals**, **notEquals**.
 */
export type TimeOfDayRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: TimeOfDay;
};

export const timeOfDayRestriction1Schema: Schema<TimeOfDayRestriction1> = s.object<TimeOfDayRestriction1>({
  operation: s.string(),
  value: s.optional(s.lazy(() => timeOfDaySchema)),
});

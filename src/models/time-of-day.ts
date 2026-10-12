import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeOfDay = {
  /**
   * The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**,
   * **22:30:00-03:00**.
   */
  endTime?: string;
  /**
   * The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**,
   * **22:30:00-03:00**.
   */
  startTime?: string;
};

export const timeOfDaySchema: Schema<TimeOfDay> = s.object<TimeOfDay>({
  endTime: s.optional(s.string()),
  startTime: s.optional(s.string()),
});

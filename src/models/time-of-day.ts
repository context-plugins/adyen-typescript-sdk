import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeOfDay = {
  endTime?: string;
  startTime?: string;
};

export const timeOfDaySchema: Schema<TimeOfDay> = s.object<TimeOfDay>({
  endTime: s.optional(s.string()),
  startTime: s.optional(s.string()),
});

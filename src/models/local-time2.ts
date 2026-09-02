import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocalTime2 = {
  hour?: number;
  minute?: number;
  nano?: number;
  second?: number;
};

export const localTime2Schema: Schema<LocalTime2> = s.object<LocalTime2>({
  hour: s.optional(s.number()),
  minute: s.optional(s.number()),
  nano: s.optional(s.number()),
  second: s.optional(s.number()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocalTime = {
  hour?: number;
  minute?: number;
  nano?: number;
  second?: number;
};

export const localTimeSchema: Schema<LocalTime> = s.object<LocalTime>({
  hour: s.optional(s.int()),
  minute: s.optional(s.int()),
  nano: s.optional(s.int()),
  second: s.optional(s.int()),
});

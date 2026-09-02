import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Hardware = {
  displayMaximumBackLight?: number;
  resetTotalsHour?: number;
  restartHour?: number;
};

export const hardwareSchema: Schema<Hardware> = s.object<Hardware>({
  displayMaximumBackLight: s.optional(s.number()),
  resetTotalsHour: s.optional(s.number()),
  restartHour: s.optional(s.number()),
});

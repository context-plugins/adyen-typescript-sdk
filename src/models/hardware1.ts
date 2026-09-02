import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Hardware1 = {
  displayMaximumBackLight?: number;
  resetTotalsHour?: number;
  restartHour?: number;
};

export const hardware1Schema: Schema<Hardware1> = s.object<Hardware1>({
  displayMaximumBackLight: s.optional(s.number()),
  resetTotalsHour: s.optional(s.number()),
  restartHour: s.optional(s.number()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type151Schema, type Type151 } from "./type151.js";

export type SweepSchedule = {
  cronExpression?: string;
  type: Type151;
};

export const sweepScheduleSchema: Schema<SweepSchedule> = s.object<SweepSchedule>({
  cronExpression: s.optional(s.string()),
  type: type151Schema,
});

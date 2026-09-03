import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type62Schema, type Type62 } from "./type62.js";

export type SweepSchedule = {
  cronExpression?: string;
  type: Type62;
};

export const sweepScheduleSchema: Schema<SweepSchedule> = s.object<SweepSchedule>({
  cronExpression: s.optional(s.string()),
  type: type62Schema,
});

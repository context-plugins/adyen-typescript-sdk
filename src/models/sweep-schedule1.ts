import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type151Schema, type Type151 } from "./type151.js";

export type SweepSchedule1 = {
  cronExpression?: string;
  type: Type151;
};

export const sweepSchedule1Schema: Schema<SweepSchedule1> = s.object<SweepSchedule1>({
  cronExpression: s.optional(s.string()),
  type: type151Schema,
});

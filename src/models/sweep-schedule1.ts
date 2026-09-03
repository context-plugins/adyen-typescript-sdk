import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type62Schema, type Type62 } from "./type62.js";

export type SweepSchedule1 = {
  cronExpression?: string;
  type: Type62;
};

export const sweepSchedule1Schema: Schema<SweepSchedule1> = s.object<SweepSchedule1>({
  cronExpression: s.optional(s.string()),
  type: type62Schema,
});

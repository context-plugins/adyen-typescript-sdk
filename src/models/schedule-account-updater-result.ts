import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleAccountUpdaterResult = {
  pspReference: string;
  result: string;
};

export const scheduleAccountUpdaterResultSchema: Schema<ScheduleAccountUpdaterResult> =
  s.object<ScheduleAccountUpdaterResult>({
    pspReference: s.string(),
    result: s.string(),
  });

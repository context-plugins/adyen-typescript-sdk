import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type PayoutScheduleResponse1 = {
  nextScheduledPayout?: Date;
  schedule?: Schedule;
};

export const payoutScheduleResponse1Schema: Schema<PayoutScheduleResponse1> =
  s.object<PayoutScheduleResponse1>({
    nextScheduledPayout: s.optional(s.dateTime()),
    schedule: s.optional(s.lazy(() => scheduleSchema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type PayoutScheduleResponse4 = {
  nextScheduledPayout?: Date;
  schedule?: Schedule;
};

export const payoutScheduleResponse4Schema: Schema<PayoutScheduleResponse4> =
  s.object<PayoutScheduleResponse4>({
    nextScheduledPayout: s.optional(s.dateTime()),
    schedule: s.optional(s.lazy(() => scheduleSchema)),
  });

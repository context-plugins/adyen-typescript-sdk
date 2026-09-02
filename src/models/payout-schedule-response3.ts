import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type PayoutScheduleResponse3 = {
  nextScheduledPayout?: Date;
  schedule?: Schedule;
};

export const payoutScheduleResponse3Schema: Schema<PayoutScheduleResponse3> =
  s.object<PayoutScheduleResponse3>({
    nextScheduledPayout: s.optional(s.dateTime()),
    schedule: s.optional(s.lazy(() => scheduleSchema)),
  });

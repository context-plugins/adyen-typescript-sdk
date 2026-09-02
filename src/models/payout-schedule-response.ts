import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type PayoutScheduleResponse = {
  nextScheduledPayout?: Date;
  schedule?: Schedule;
};

export const payoutScheduleResponseSchema: Schema<PayoutScheduleResponse> = s.object<PayoutScheduleResponse>({
  nextScheduledPayout: s.optional(s.dateTime()),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
});

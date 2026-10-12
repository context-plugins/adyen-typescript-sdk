import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type PayoutScheduleResponse = {
  /** The date of the next scheduled payout. */
  nextScheduledPayout?: Date;
  /**
   * The payout schedule for the account.
   *
   * Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`,
   * `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`. >
   * `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.
   */
  schedule?: Schedule;
};

export const payoutScheduleResponseSchema: Schema<PayoutScheduleResponse> = s.object<PayoutScheduleResponse>({
  nextScheduledPayout: s.optional(s.dateTime()),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
});

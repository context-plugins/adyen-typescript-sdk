import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

/** The details of the payout schedule to which the account must be updated. */
export type UpdatePayoutScheduleRequest2 = {
  /**
   * Direction on how to handle any payouts that have already been scheduled.
   *
   * Possible values:
   * * `CLOSE`: close the existing batch of payouts.
   * * `UPDATE`: reschedule the existing batch to the new schedule.
   * * `NOTHING` (**default**): allow the payout to proceed.
   */
  action?: Action;
  /**
   * The reason for the payout schedule update. > This field is required when the `schedule`
   * parameter is set to `HOLD`.
   */
  reason?: string;
  /**
   * The new payout schedule for the account.
   *
   * Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`,
   * `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`. >
   * `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.
   */
  schedule: Schedule1;
};

export const updatePayoutScheduleRequest2Schema: Schema<UpdatePayoutScheduleRequest2> =
  s.object<UpdatePayoutScheduleRequest2>({
    action: s.optional(s.lazy(() => actionSchema)),
    reason: s.optional(s.string()),
    schedule: schedule1Schema,
  });

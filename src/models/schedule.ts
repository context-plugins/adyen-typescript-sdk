import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payout schedule for the account.
 *
 * Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`,
 * `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`. > `HOLD`
 * prevents scheduled payouts, but you can still initiate payouts manually.
 */
export const Schedule = {
  BiweeklyOn1StAnd15ThAtMidnight: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT",
  Daily: "DAILY",
  DailyAu: "DAILY_AU",
  DailyEu: "DAILY_EU",
  DailySg: "DAILY_SG",
  DailyUs: "DAILY_US",
  Hold: "HOLD",
  Monthly: "MONTHLY",
  Weekly: "WEEKLY",
  WeeklyMonToFriAu: "WEEKLY_MON_TO_FRI_AU",
  WeeklyMonToFriEu: "WEEKLY_MON_TO_FRI_EU",
  WeeklyMonToFriUs: "WEEKLY_MON_TO_FRI_US",
  WeeklyOnTueFriMidnight: "WEEKLY_ON_TUE_FRI_MIDNIGHT",
  WeeklySunToThuAu: "WEEKLY_SUN_TO_THU_AU",
  WeeklySunToThuUs: "WEEKLY_SUN_TO_THU_US",
} as const;
export type Schedule = (typeof Schedule)[keyof typeof Schedule] | (string & {});

export const scheduleSchema: EnumSchema<Schedule> = s.enumOf<Schedule>(Schedule);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schedule1 = {
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
export type Schedule1 = (typeof Schedule1)[keyof typeof Schedule1] | (string & {});

export const schedule1Schema: EnumSchema<Schedule1> = s.enumOf<Schedule1>(Schedule1);

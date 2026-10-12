import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type62Schema, type Type62 } from "./type62.js";

export type SweepSchedule = {
  /**
   * A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the
   * sweep schedule. The schedule uses the time zone of the balance account. For example, **30 17 *
   * * MON** schedules a sweep every Monday at 17:30.
   *
   * The expression must have five values separated by a single space in the following order:
   *
   * * Minute: **0-59**
   *
   * * Hour: **0-23**
   *
   * * Day of the month: **1-31**
   *
   * * Month: **1-12** or **JAN-DEC**
   *
   * * Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.
   *
   * The following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and
   * **&#47;**. See [crontab guru](https://crontab.guru/) for more examples.
   *
   * Required when `type` is **cron**.
   */
  cronExpression?: string;
  /**
   * The schedule type.
   *
   * Possible values:
   *
   * * **cron**: push out funds based on a `cronExpression`.
   *
   * * **daily**: push out funds daily at 07:00 AM CET.
   *
   * * **weekly**: push out funds every Monday at 07:00 AM CET.
   *
   * * **monthly**: push out funds every first of the month at 07:00 AM CET.
   *
   * * **balance**: execute the sweep instantly if the `triggerAmount` is reached.
   */
  type: Type62;
};

export const sweepScheduleSchema: Schema<SweepSchedule> = s.object<SweepSchedule>({
  cronExpression: s.optional(s.string()),
  type: type62Schema,
});

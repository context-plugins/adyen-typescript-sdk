import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during
 * which the rule conditions and limits apply, and how often counters are reset.
 *
 * Possible values:
 *   * **perTransaction**: conditions are evaluated and the counters are reset for every
 *     transaction.
 *  * **daily**: the counters are reset daily at 00:00:00 CET.
 *  * **weekly**: the counters are reset every Monday at 00:00:00 CET.
 *  * **monthly**: the counters reset every first day of the month at 00:00:00 CET.
 *  * **lifetime**: conditions are applied to the lifetime of the payment instrument.
 *  * **rolling**: conditions are applied and the counters are reset based on a `duration`. If the
 *    reset date and time are not provided, Adyen applies the default reset time similar to fixed
 *    intervals. For example, if the duration is every two weeks, the counter resets every third
 *    Monday at 00:00:00 CET.
 *  * **sliding**: conditions are applied and the counters are reset based on the current time and a
 *    `duration` that you specify.
 */
export const Type131 = {
  Daily: "daily",
  Lifetime: "lifetime",
  Monthly: "monthly",
  PerTransaction: "perTransaction",
  Rolling: "rolling",
  Sliding: "sliding",
  Weekly: "weekly",
} as const;
export type Type131 = (typeof Type131)[keyof typeof Type131] | (string & {});

export const type131Schema: EnumSchema<Type131> = s.enumOf<Type131>(Type131);

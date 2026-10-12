import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Type62 = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Balance: "balance",
  Cron: "cron",
} as const;
export type Type62 = (typeof Type62)[keyof typeof Type62] | (string & {});

export const type62Schema: EnumSchema<Type62> = s.enumOf<Type62>(Type62);

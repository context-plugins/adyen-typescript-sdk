import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Direction on how to handle any payouts that have already been scheduled.
 *
 * Possible values:
 * * `CLOSE`: close the existing batch of payouts.
 * * `UPDATE`: reschedule the existing batch to the new schedule.
 * * `NOTHING` (**default**): allow the payout to proceed.
 */
export const Action = {
  Close: "CLOSE",
  Nothing: "NOTHING",
  Update: "UPDATE",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);

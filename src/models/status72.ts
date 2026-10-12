import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the transaction.
 *
 * Possible values:
 *
 * * **pending**: The transaction is still pending.
 *
 * * **booked**: The transaction has been booked to the balance account.
 */
export const Status72 = {
  Booked: "booked",
  Pending: "pending",
} as const;
export type Status72 = (typeof Status72)[keyof typeof Status72] | (string & {});

export const status72Schema: EnumSchema<Status72> = s.enumOf<Status72>(Status72);

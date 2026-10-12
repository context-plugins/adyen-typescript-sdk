import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the reassignment. Possible values:
 *  * `reassignmentInProgress`: the terminal was boarded and is now scheduled to remove the
 *    configuration. Wait for the terminal to synchronize with the Adyen platform.
 *  * `deployed`: the terminal is deployed and reassigned.
 *  * `inventory`: the terminal is in inventory and cannot process transactions.
 *  * `boarded`: the terminal is boarded to a store, or a merchant account representing a store, and
 *    can process transactions.
 */
export const Status21 = {
  Boarded: "boarded",
  Deployed: "deployed",
  Inventory: "inventory",
  ReassignmentInProgress: "reassignmentInProgress",
} as const;
export type Status21 = (typeof Status21)[keyof typeof Status21] | (string & {});

export const status21Schema: EnumSchema<Status21> = s.enumOf<Status21>(Status21);

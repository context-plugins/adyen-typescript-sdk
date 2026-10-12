import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status21Schema, type Status21 } from "./status21.js";
import {
  terminalReassignmentTarget2Schema,
  type TerminalReassignmentTarget2,
} from "./terminal-reassignment-target2.js";

export type TerminalAssignment = {
  /** The unique identifier of the company account to which terminal is assigned. */
  companyId: string;
  /** The unique identifier of the merchant account to which terminal is assigned. */
  merchantId?: string;
  /** Indicates where the terminal is in the process of being reassigned to. */
  reassignmentTarget?: TerminalReassignmentTarget2;
  /**
   * The status of the reassignment. Possible values:
   *  * `reassignmentInProgress`: the terminal was boarded and is now scheduled to remove the
   *    configuration. Wait for the terminal to synchronize with the Adyen platform.
   *  * `deployed`: the terminal is deployed and reassigned.
   *  * `inventory`: the terminal is in inventory and cannot process transactions.
   *  * `boarded`: the terminal is boarded to a store, or a merchant account representing a store,
   *    and can process transactions.
   */
  status: Status21;
  /** The unique identifier of the store to which terminal is assigned. */
  storeId?: string;
};

export const terminalAssignmentSchema: Schema<TerminalAssignment> = s.object<TerminalAssignment>({
  companyId: s.string(),
  merchantId: s.optional(s.string()),
  reassignmentTarget: s.optional(s.lazy(() => terminalReassignmentTarget2Schema)),
  status: status21Schema,
  storeId: s.optional(s.string()),
});

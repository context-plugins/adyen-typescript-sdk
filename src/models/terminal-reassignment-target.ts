import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalReassignmentTarget = {
  /** The unique identifier of the company account to which the terminal is reassigned. */
  companyId?: string;
  /**
   * Indicates if the terminal is reassigned to the inventory of the merchant account.
   * - If **true**, the terminal is in the inventory of the merchant account and cannot process
   *   transactions.
   * - If **false**, the terminal is reassigned directly to the merchant account and can process
   *   transactions.
   */
  inventory: boolean;
  /** The unique identifier of the merchant account to which the terminal is reassigned. */
  merchantId?: string;
  /** The unique identifier of the store to which the terminal is reassigned. */
  storeId?: string;
};

export const terminalReassignmentTargetSchema: Schema<TerminalReassignmentTarget> =
  s.object<TerminalReassignmentTarget>({
    companyId: s.optional(s.string()),
    inventory: s.boolean(),
    merchantId: s.optional(s.string()),
    storeId: s.optional(s.string()),
  });

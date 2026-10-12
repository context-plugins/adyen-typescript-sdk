import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalReassignmentRequest = {
  /** The unique identifier of the company account to which the terminal is reassigned. */
  companyId?: string;
  /**
   * Must be specified when reassigning terminals to a merchant account:
   *
   * - If set to **true**, reassigns terminals to the inventory of the merchant account and the
   *   terminals cannot process transactions.
   *
   * - If set to **false**, reassigns terminals directly to the merchant account and the terminals
   *   can process transactions.
   */
  inventory?: boolean;
  /**
   * The unique identifier of the merchant account to which the terminal is reassigned. When
   * reassigning terminals to a merchant account, you must specify the `inventory` field.
   */
  merchantId?: string;
  /** The unique identifier of the store to which the terminal is reassigned. */
  storeId?: string;
};

export const terminalReassignmentRequestSchema: Schema<TerminalReassignmentRequest> =
  s.object<TerminalReassignmentRequest>({
    companyId: s.optional(s.string()),
    inventory: s.optional(s.boolean()),
    merchantId: s.optional(s.string()),
    storeId: s.optional(s.string()),
  });

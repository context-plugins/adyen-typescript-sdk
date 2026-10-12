import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the result of the payout execution. */
export type PayoutScheduleExecutionDetails2 = {
  /** Human readable reason for why execution was not successful if applicable. */
  reason?: string;
  /** Reason Code for why execution was not successful if applicable. */
  reasonCode?: string;
  /** The id of the transfer from executing the payout. */
  transferId?: string;
};

export const payoutScheduleExecutionDetails2Schema: Schema<PayoutScheduleExecutionDetails2> =
  s.object<PayoutScheduleExecutionDetails2>({
    reason: s.optional(s.string()),
    reasonCode: s.optional(s.string()),
    transferId: s.optional(s.string()),
  });

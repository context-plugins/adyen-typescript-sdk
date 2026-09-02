import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayoutScheduleExecutionDetails2 = {
  reason?: string;
  reasonCode?: string;
  transferId?: string;
};

export const payoutScheduleExecutionDetails2Schema: Schema<PayoutScheduleExecutionDetails2> =
  s.object<PayoutScheduleExecutionDetails2>({
    reason: s.optional(s.string()),
    reasonCode: s.optional(s.string()),
    transferId: s.optional(s.string()),
  });

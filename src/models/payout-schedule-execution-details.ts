import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayoutScheduleExecutionDetails = {
  reason?: string;
  reasonCode?: string;
  transferId?: string;
};

export const payoutScheduleExecutionDetailsSchema: Schema<PayoutScheduleExecutionDetails> =
  s.object<PayoutScheduleExecutionDetails>({
    reason: s.optional(s.string()),
    reasonCode: s.optional(s.string()),
    transferId: s.optional(s.string()),
  });

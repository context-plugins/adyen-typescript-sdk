import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { executionResult1Schema, type ExecutionResult1 } from "./execution-result1.js";
import {
  payoutScheduleExecutionDetails2Schema,
  type PayoutScheduleExecutionDetails2,
} from "./payout-schedule-execution-details2.js";

export type PayoutScheduleExecution = {
  id?: string;
  result?: ExecutionResult1;
  resultDetails?: PayoutScheduleExecutionDetails2;
  triggeredAt?: Date;
};

export const payoutScheduleExecutionSchema: Schema<PayoutScheduleExecution> =
  s.object<PayoutScheduleExecution>({
    id: s.optional(s.string()),
    result: s.optional(s.lazy(() => executionResult1Schema)),
    resultDetails: s.optional(s.lazy(() => payoutScheduleExecutionDetails2Schema)),
    triggeredAt: s.optional(s.dateTime()),
  });

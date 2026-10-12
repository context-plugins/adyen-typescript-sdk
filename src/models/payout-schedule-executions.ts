import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutScheduleExecutionSchema, type PayoutScheduleExecution } from "./payout-schedule-execution.js";

export type PayoutScheduleExecutions = {
  /** Contains a list of executions of the payout schedule. */
  payoutScheduleExecutions: PayoutScheduleExecution[];
};

export const payoutScheduleExecutionsSchema: Schema<PayoutScheduleExecutions> =
  s.object<PayoutScheduleExecutions>({
    payoutScheduleExecutions: s.array(s.lazy(() => payoutScheduleExecutionSchema)),
  });

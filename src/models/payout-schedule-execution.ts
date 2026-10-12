import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { executionResult1Schema, type ExecutionResult1 } from "./execution-result1.js";
import {
  payoutScheduleExecutionDetails2Schema,
  type PayoutScheduleExecutionDetails2,
} from "./payout-schedule-execution-details2.js";

export type PayoutScheduleExecution = {
  /** The unique identifier of the payout execution. */
  id?: string;
  /**
   * The status of the payout execution.
   *
   * Possible values:
   * - **succeeded**: The payout was sent successfully.
   * - **failed**: The payout could not be sent because an error occurred.
   * - **skipped**: The payout was not triggered as expected.
   */
  result?: ExecutionResult1;
  /** Contains information about the result of the payout execution. */
  resultDetails?: PayoutScheduleExecutionDetails2;
  /** The date and time when the payout execution was initiated. */
  triggeredAt?: Date;
};

export const payoutScheduleExecutionSchema: Schema<PayoutScheduleExecution> =
  s.object<PayoutScheduleExecution>({
    id: s.optional(s.string()),
    result: s.optional(s.lazy(() => executionResult1Schema)),
    resultDetails: s.optional(s.lazy(() => payoutScheduleExecutionDetails2Schema)),
    triggeredAt: s.optional(s.dateTime()),
  });

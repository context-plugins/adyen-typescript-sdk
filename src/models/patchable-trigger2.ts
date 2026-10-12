import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDto1Schema, type PatchableAmountDto1 } from "./patchable-amount-dto1.js";
import { patchableScheduleSchema, type PatchableSchedule } from "./patchable-schedule.js";

/**
 * The condition that triggers the top-up. This can be a recurring schedule or a minimum balance
 * threshold.
 */
export type PatchableTrigger2 = {
  /** Contains the details about the schedule that determines when the top up is executed. */
  schedule?: PatchableSchedule | null;
  /**
   * The balance threshold that triggers the top-up. If the balance falls below this amount, a
   * top-up is initiated.
   */
  threshold?: PatchableAmountDto1;
};

export const patchableTrigger2Schema: Schema<PatchableTrigger2> = s.object<PatchableTrigger2>({
  schedule: s.optionalNullable(s.lazy(() => patchableScheduleSchema)),
  threshold: s.optional(s.lazy(() => patchableAmountDto1Schema)),
});

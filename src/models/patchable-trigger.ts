import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDto1Schema, type PatchableAmountDto1 } from "./patchable-amount-dto1.js";
import { patchableScheduleSchema, type PatchableSchedule } from "./patchable-schedule.js";

export type PatchableTrigger = {
  /** Contains the details about the schedule that determines when the top up is executed. */
  schedule?: PatchableSchedule | null;
  /**
   * The balance threshold that triggers the top-up. If the balance falls below this amount, a
   * top-up is initiated.
   */
  threshold?: PatchableAmountDto1;
};

export const patchableTriggerSchema: Schema<PatchableTrigger> = s.object<PatchableTrigger>({
  schedule: s.optionalNullable(s.lazy(() => patchableScheduleSchema)),
  threshold: s.optional(s.lazy(() => patchableAmountDto1Schema)),
});

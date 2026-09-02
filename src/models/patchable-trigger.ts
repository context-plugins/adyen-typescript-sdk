import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableAmountDto1Schema, type PatchableAmountDto1 } from "./patchable-amount-dto1.js";
import { patchableScheduleSchema, type PatchableSchedule } from "./patchable-schedule.js";

export type PatchableTrigger = {
  schedule?: PatchableSchedule | null;
  threshold?: PatchableAmountDto1;
};

export const patchableTriggerSchema: Schema<PatchableTrigger> = s.object<PatchableTrigger>({
  schedule: s.optionalNullable(s.lazy(() => patchableScheduleSchema)),
  threshold: s.optional(s.lazy(() => patchableAmountDto1Schema)),
});

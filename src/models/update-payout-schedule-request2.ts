import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

export type UpdatePayoutScheduleRequest2 = {
  action?: Action;
  reason?: string;
  schedule: Schedule1;
};

export const updatePayoutScheduleRequest2Schema: Schema<UpdatePayoutScheduleRequest2> =
  s.object<UpdatePayoutScheduleRequest2>({
    action: s.optional(s.lazy(() => actionSchema)),
    reason: s.optional(s.string()),
    schedule: schedule1Schema,
  });

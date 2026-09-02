import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

export type UpdatePayoutScheduleRequest = {
  action?: Action;
  reason?: string;
  schedule: Schedule1;
};

export const updatePayoutScheduleRequestSchema: Schema<UpdatePayoutScheduleRequest> =
  s.object<UpdatePayoutScheduleRequest>({
    action: s.optional(s.lazy(() => actionSchema)),
    reason: s.optional(s.string()),
    schedule: schedule1Schema,
  });

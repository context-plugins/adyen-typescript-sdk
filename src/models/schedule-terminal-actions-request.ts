import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionDetailsSchema, type ActionDetails } from "./unions/action-details.js";

export type ScheduleTerminalActionsRequest = {
  actionDetails?: ActionDetails;
  scheduledAt?: string;
  storeId?: string;
  terminalIds?: string[];
};

export const scheduleTerminalActionsRequestSchema: Schema<ScheduleTerminalActionsRequest> =
  s.object<ScheduleTerminalActionsRequest>({
    actionDetails: s.optional(s.lazy(() => actionDetailsSchema)),
    scheduledAt: s.optional(s.string()),
    storeId: s.optional(s.string()),
    terminalIds: s.optional(s.array(s.string())),
  });

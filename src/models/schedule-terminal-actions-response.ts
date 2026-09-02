import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionScheduleDetailSchema,
  type TerminalActionScheduleDetail,
} from "./terminal-action-schedule-detail.js";
import { actionDetailsSchema, type ActionDetails } from "./unions/action-details.js";

export type ScheduleTerminalActionsResponse = {
  actionDetails?: ActionDetails;
  items?: TerminalActionScheduleDetail[];
  scheduledAt?: string;
  storeId?: string;
  terminalsWithErrors?: Record<string, Record<string, unknown>>;
  totalErrors?: number;
  totalScheduled?: number;
};

export const scheduleTerminalActionsResponseSchema: Schema<ScheduleTerminalActionsResponse> =
  s.object<ScheduleTerminalActionsResponse>({
    actionDetails: s.optional(s.lazy(() => actionDetailsSchema)),
    items: s.optional(s.array(s.lazy(() => terminalActionScheduleDetailSchema))),
    scheduledAt: s.optional(s.string()),
    storeId: s.optional(s.string()),
    terminalsWithErrors: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    totalErrors: s.optional(s.number()),
    totalScheduled: s.optional(s.number()),
  });

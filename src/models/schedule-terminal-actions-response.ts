import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionScheduleDetailSchema,
  type TerminalActionScheduleDetail,
} from "./terminal-action-schedule-detail.js";
import { actionDetailsSchema, type ActionDetails } from "./unions/action-details.js";

export type ScheduleTerminalActionsResponse = {
  /** Information about the action to take. */
  actionDetails?: ActionDetails;
  /**
   * A list containing a terminal ID and an action ID for each terminal that the action was
   * scheduled for.
   */
  items?: TerminalActionScheduleDetail[];
  /**
   * The date and time when the action should happen. Format: [RFC
   * 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset.
   * For example, **2021-11-15T12:16:21+0100** The action is sent with the first [maintenance
   * call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect)
   * after the specified date and time in the time zone of the terminal. An empty value causes the
   * action to be sent as soon as possible: at the next maintenance call.
   */
  scheduledAt?: string;
  /**
   * The unique ID of the
   * [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present,
   * all terminals in the `terminalIds` list must be assigned to this store.
   */
  storeId?: string;
  /**
   * The validation errors that occurred in the list of terminals, and for each error the IDs of the
   * terminals that the error applies to.
   */
  terminalsWithErrors?: Record<string, Record<string, unknown>>;
  /** The number of terminals for which scheduling the action failed. */
  totalErrors?: number;
  /**
   * The number of terminals for which the action was successfully scheduled. This doesn't mean the
   * action has happened yet.
   */
  totalScheduled?: number;
};

export const scheduleTerminalActionsResponseSchema: Schema<ScheduleTerminalActionsResponse> =
  s.object<ScheduleTerminalActionsResponse>({
    actionDetails: s.optional(s.lazy(() => actionDetailsSchema)),
    items: s.optional(s.array(s.lazy(() => terminalActionScheduleDetailSchema))),
    scheduledAt: s.optional(s.string()),
    storeId: s.optional(s.string()),
    terminalsWithErrors: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    totalErrors: s.optional(s.int()),
    totalScheduled: s.optional(s.int()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { includeModeSchema, type IncludeMode } from "./include-mode.js";

export type NotificationEventConfiguration = {
  /**
   * The type of event.
   *
   * Possible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**,
   * **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**,
   * **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**,
   * **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**,
   * **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**,
   * **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**,
   * **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.
   */
  eventType: EventType;
  /**
   * Indicates whether the specified `eventType` is sent to your webhook endpoint. Possible values:
   * * **INCLUDE**: Send the specified `eventType`.
   * * **EXCLUDE**: Send all event types except the specified `eventType` and other event types with
   *   the `includeMode` set to **EXCLUDE**.
   */
  includeMode: IncludeMode;
};

export const notificationEventConfigurationSchema: Schema<NotificationEventConfiguration> =
  s.object<NotificationEventConfiguration>({
    eventType: eventTypeSchema,
    includeMode: includeModeSchema,
  });

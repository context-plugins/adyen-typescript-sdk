import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventType1Schema, type EventType1 } from "./event-type1.js";

export type TestNotificationConfigurationRequest = {
  /**
   * The event types to test. If left blank, then all of the configured event types will be tested.
   * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`,
   * `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE`
   * `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`,
   * `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`,
   * `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
   */
  eventTypes?: EventType1[];
  /** The ID of the notification subscription configuration to be tested. */
  notificationId: number;
};

export const testNotificationConfigurationRequestSchema: Schema<TestNotificationConfigurationRequest> =
  s.object<TestNotificationConfigurationRequest>({
    eventTypes: s.optional(s.array(s.lazy(() => eventType1Schema))),
    notificationId: s.int(),
  });

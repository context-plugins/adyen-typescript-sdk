import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { eventType1Schema, type EventType1 } from "./event-type1.js";
import { exchangeMessageSchema, type ExchangeMessage } from "./exchange-message.js";

export type TestNotificationConfigurationResponse = {
  /** Any error messages encountered. */
  errorMessages?: string[];
  /**
   * The event types that were tested. >Permitted values: `ACCOUNT_HOLDER_CREATED`,
   * `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`,
   * `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`,
   * `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`,
   * `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`,
   * `COMPENSATE_NEGATIVE_BALANCE`.
   */
  eventTypes?: EventType1[];
  /** The notification message and related response messages. */
  exchangeMessages?: ExchangeMessage[];
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The ID of the notification subscription configuration. */
  notificationId: number;
  /** A list of messages describing the testing steps. */
  okMessages?: string[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const testNotificationConfigurationResponseSchema: Schema<TestNotificationConfigurationResponse> =
  s.object<TestNotificationConfigurationResponse>({
    errorMessages: s.optional(s.array(s.string())),
    eventTypes: s.optional(s.array(s.lazy(() => eventType1Schema))),
    exchangeMessages: s.optional(s.array(s.lazy(() => exchangeMessageSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    notificationId: s.int(),
    okMessages: s.optional(s.array(s.string())),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });

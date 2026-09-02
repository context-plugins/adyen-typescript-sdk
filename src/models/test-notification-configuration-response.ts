import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { eventType1Schema, type EventType1 } from "./event-type1.js";
import { exchangeMessageSchema, type ExchangeMessage } from "./exchange-message.js";

export type TestNotificationConfigurationResponse = {
  errorMessages?: string[];
  eventTypes?: EventType1[];
  exchangeMessages?: ExchangeMessage[];
  invalidFields?: ErrorFieldType[];
  notificationId: number;
  okMessages?: string[];
  pspReference?: string;
  resultCode?: string;
};

export const testNotificationConfigurationResponseSchema: Schema<TestNotificationConfigurationResponse> =
  s.object<TestNotificationConfigurationResponse>({
    errorMessages: s.optional(s.array(s.string())),
    eventTypes: s.optional(s.array(s.lazy(() => eventType1Schema))),
    exchangeMessages: s.optional(s.array(s.lazy(() => exchangeMessageSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    notificationId: s.number(),
    okMessages: s.optional(s.array(s.string())),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });

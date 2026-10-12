import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import {
  notificationConfigurationDetails2Schema,
  type NotificationConfigurationDetails2,
} from "./notification-configuration-details2.js";

export type GetNotificationConfigurationResponse = {
  /** Details of the notification subscription configuration. */
  configurationDetails: NotificationConfigurationDetails2;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const getNotificationConfigurationResponseSchema: Schema<GetNotificationConfigurationResponse> =
  s.object<GetNotificationConfigurationResponse>({
    configurationDetails: notificationConfigurationDetails2Schema,
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });

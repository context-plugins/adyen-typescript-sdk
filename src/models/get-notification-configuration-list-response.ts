import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import {
  notificationConfigurationDetailsSchema,
  type NotificationConfigurationDetails,
} from "./notification-configuration-details.js";

export type GetNotificationConfigurationListResponse = {
  /** Details of the notification subscription configurations. */
  configurations?: NotificationConfigurationDetails[];
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const getNotificationConfigurationListResponseSchema: Schema<GetNotificationConfigurationListResponse> =
  s.object<GetNotificationConfigurationListResponse>({
    configurations: s.optional(s.array(s.lazy(() => notificationConfigurationDetailsSchema))),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });

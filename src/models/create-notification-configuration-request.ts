import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationConfigurationDetails4Schema,
  type NotificationConfigurationDetails4,
} from "./notification-configuration-details4.js";

export type CreateNotificationConfigurationRequest = {
  /** Details of the prospective notification subscription configuration. */
  configurationDetails: NotificationConfigurationDetails4;
};

export const createNotificationConfigurationRequestSchema: Schema<CreateNotificationConfigurationRequest> =
  s.object<CreateNotificationConfigurationRequest>({
    configurationDetails: notificationConfigurationDetails4Schema,
  });

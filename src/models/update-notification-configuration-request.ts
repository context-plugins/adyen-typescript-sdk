import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationConfigurationDetails3Schema,
  type NotificationConfigurationDetails3,
} from "./notification-configuration-details3.js";

export type UpdateNotificationConfigurationRequest = {
  configurationDetails: NotificationConfigurationDetails3;
};

export const updateNotificationConfigurationRequestSchema: Schema<UpdateNotificationConfigurationRequest> =
  s.object<UpdateNotificationConfigurationRequest>({
    configurationDetails: notificationConfigurationDetails3Schema,
  });

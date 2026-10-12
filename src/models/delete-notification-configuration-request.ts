import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteNotificationConfigurationRequest = {
  /** A list of IDs of the notification subscription configurations to be deleted. */
  notificationIds: number[];
};

export const deleteNotificationConfigurationRequestSchema: Schema<DeleteNotificationConfigurationRequest> =
  s.object<DeleteNotificationConfigurationRequest>({
    notificationIds: s.array(s.int()),
  });

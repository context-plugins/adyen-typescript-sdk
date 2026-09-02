import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteNotificationConfigurationRequest = {
  notificationIds: number[];
};

export const deleteNotificationConfigurationRequestSchema: Schema<DeleteNotificationConfigurationRequest> =
  s.object<DeleteNotificationConfigurationRequest>({
    notificationIds: s.array(s.number()),
  });

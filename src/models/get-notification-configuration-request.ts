import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetNotificationConfigurationRequest = {
  /** The ID of the notification subscription configuration whose details are to be retrieved. */
  notificationId: number;
};

export const getNotificationConfigurationRequestSchema: Schema<GetNotificationConfigurationRequest> =
  s.object<GetNotificationConfigurationRequest>({
    notificationId: s.int(),
  });

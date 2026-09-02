import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetNotificationConfigurationRequest = {
  notificationId: number;
};

export const getNotificationConfigurationRequestSchema: Schema<GetNotificationConfigurationRequest> =
  s.object<GetNotificationConfigurationRequest>({
    notificationId: s.number(),
  });

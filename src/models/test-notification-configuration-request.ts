import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventType1Schema, type EventType1 } from "./event-type1.js";

export type TestNotificationConfigurationRequest = {
  eventTypes?: EventType1[];
  notificationId: number;
};

export const testNotificationConfigurationRequestSchema: Schema<TestNotificationConfigurationRequest> =
  s.object<TestNotificationConfigurationRequest>({
    eventTypes: s.optional(s.array(s.lazy(() => eventType1Schema))),
    notificationId: s.number(),
  });

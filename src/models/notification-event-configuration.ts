import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { includeModeSchema, type IncludeMode } from "./include-mode.js";

export type NotificationEventConfiguration = {
  eventType: EventType;
  includeMode: IncludeMode;
};

export const notificationEventConfigurationSchema: Schema<NotificationEventConfiguration> =
  s.object<NotificationEventConfiguration>({
    eventType: eventTypeSchema,
    includeMode: includeModeSchema,
  });

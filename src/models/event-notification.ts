import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";
import { eventToNotify1Schema, type EventToNotify1 } from "./event-to-notify1.js";

export type EventNotification = {
  timeStamp: Date;
  eventToNotify: EventToNotify1;
  eventDetails?: string;
  rejectedMessage?: string;
  maintenanceRequiredFlag?: boolean;
  displayOutput?: DisplayOutput[];
};

export const eventNotificationSchema: Schema<EventNotification> = s.object<EventNotification>({
  timeStamp: s.dateTime(),
  eventToNotify: eventToNotify1Schema,
  eventDetails: s.optional(s.string()),
  rejectedMessage: s.optional(s.string()),
  maintenanceRequiredFlag: s.optional(s.boolean()),
  displayOutput: s.optional(s.array(s.lazy(() => displayOutputSchema))),
  _keysMap: {
    timeStamp: "TimeStamp",
    eventToNotify: "EventToNotify",
    eventDetails: "EventDetails",
    rejectedMessage: "RejectedMessage",
    maintenanceRequiredFlag: "MaintenanceRequiredFlag",
    displayOutput: "DisplayOutput",
  },
});

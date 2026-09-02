import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";
import { eventToNotify1Schema, type EventToNotify1 } from "./event-to-notify1.js";

export type EventNotification2 = {
  timeStamp: Date;
  eventToNotify: EventToNotify1;
  eventDetails?: string;
  rejectedMessage?: string;
  maintenanceRequiredFlag?: boolean;
  displayOutput?: DisplayOutput[];
};

export const eventNotification2Schema: Schema<EventNotification2> = s.object<EventNotification2>({
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

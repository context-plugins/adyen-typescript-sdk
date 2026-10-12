import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";
import { eventToNotify1Schema, type EventToNotify1 } from "./event-to-notify1.js";

/**
 * Content of the EventNotification message. It conveys Information related to the event, and
 * possible action (maintenance, message to display).
 */
export type EventNotification = {
  /** Date and time of a transaction for the Sale System, the POI System or the Acquirer. */
  timeStamp: Date;
  /**
   * Event the POI notifies to the Sale System. Possible values:
   * * **Abort**
   * * **BeginMaintenance**
   * * **CardInserted**
   * * **CardRemoved**
   * * **Completed**
   * * **CustomerLanguage**
   * * **EndMaintenance**
   * * **Initialised**
   * * **KeyPressed**
   * * **OutOfOrder**
   * * **Reject**
   * * **SaleAdmin**
   * * **SaleWakeUp**
   * * **ScanBarcodeResult**
   * * **SecurityAlarm**
   * * **Shutdown**
   * * **StopAssistance**
   * * **UseAnotherCardForPreauth**
   */
  eventToNotify: EventToNotify1;
  /**
   * Information about the event the POI notifies to the Sale System. If present, the Sale logs it
   * for further examination.
   */
  eventDetails?: string;
  /**
   * Message request rejected by the receiver. Mandatory if EventToNotify is Reject, absent in other
   * cases.
   */
  rejectedMessage?: string;
  /** Indicates if the occurred event requires maintenance call or action. @default false */
  maintenanceRequiredFlag?: boolean;
  /** Information to display and the way to process the display. To display an event message. */
  displayOutput?: DisplayOutput[];
};

export const eventNotificationSchema: Schema<EventNotification> = s.object<EventNotification>({
  timeStamp: s.dateTime(),
  eventToNotify: eventToNotify1Schema,
  eventDetails: s.optional(s.string()),
  rejectedMessage: s.optional(s.string()),
  maintenanceRequiredFlag: s.defaulted(s.boolean(), false),
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

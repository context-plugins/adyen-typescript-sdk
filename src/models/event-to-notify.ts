import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventToNotify = {
  BeginMaintenance: "BeginMaintenance",
  EndMaintenance: "EndMaintenance",
  Shutdown: "Shutdown",
  Initialised: "Initialised",
  OutOfOrder: "OutOfOrder",
  Completed: "Completed",
  Abort: "Abort",
  SaleWakeUp: "SaleWakeUp",
  SaleAdmin: "SaleAdmin",
  CustomerLanguage: "CustomerLanguage",
  KeyPressed: "KeyPressed",
  SecurityAlarm: "SecurityAlarm",
  StopAssistance: "StopAssistance",
  CardInserted: "CardInserted",
  CardRemoved: "CardRemoved",
  Reject: "Reject",
  UseAnotherCardForPreauth: "UseAnotherCardForPreauth",
  ScanBarcodeResult: "ScanBarcodeResult",
} as const;
export type EventToNotify = (typeof EventToNotify)[keyof typeof EventToNotify] | (string & {});

export const eventToNotifySchema: EnumSchema<EventToNotify> = s.enumOf<EventToNotify>(EventToNotify);

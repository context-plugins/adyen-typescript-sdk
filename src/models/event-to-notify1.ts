import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventToNotify1 = {
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
export type EventToNotify1 = (typeof EventToNotify1)[keyof typeof EventToNotify1] | (string & {});

export const eventToNotify1Schema: EnumSchema<EventToNotify1> = s.enumOf<EventToNotify1>(EventToNotify1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalStatus = {
  OnlineLast1Day: "OnlineLast1Day",
  OnlineLast2Days: "OnlineLast2Days",
  OnlineLast3Days: "OnlineLast3Days",
  OnlineLast4Days: "OnlineLast4Days",
  OnlineLast5Days: "OnlineLast5Days",
  OnlineLast6Days: "OnlineLast6Days",
  OnlineLast7Days: "OnlineLast7Days",
  OnlineToday: "OnlineToday",
  ReAssignToInventoryPending: "ReAssignToInventoryPending",
  ReAssignToMerchantInventoryPending: "ReAssignToMerchantInventoryPending",
  ReAssignToStorePending: "ReAssignToStorePending",
  SwitchedOff: "SwitchedOff",
} as const;
export type TerminalStatus = (typeof TerminalStatus)[keyof typeof TerminalStatus] | (string & {});

export const terminalStatusSchema: EnumSchema<TerminalStatus> = s.enumOf<TerminalStatus>(TerminalStatus);

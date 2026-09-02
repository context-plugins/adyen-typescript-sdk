import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status21Schema, type Status21 } from "./status21.js";
import {
  terminalReassignmentTarget2Schema,
  type TerminalReassignmentTarget2,
} from "./terminal-reassignment-target2.js";

export type TerminalAssignment2 = {
  companyId: string;
  merchantId?: string;
  reassignmentTarget?: TerminalReassignmentTarget2;
  status: Status21;
  storeId?: string;
};

export const terminalAssignment2Schema: Schema<TerminalAssignment2> = s.object<TerminalAssignment2>({
  companyId: s.string(),
  merchantId: s.optional(s.string()),
  reassignmentTarget: s.optional(s.lazy(() => terminalReassignmentTarget2Schema)),
  status: status21Schema,
  storeId: s.optional(s.string()),
});

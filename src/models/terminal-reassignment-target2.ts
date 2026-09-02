import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalReassignmentTarget2 = {
  companyId?: string;
  inventory: boolean;
  merchantId?: string;
  storeId?: string;
};

export const terminalReassignmentTarget2Schema: Schema<TerminalReassignmentTarget2> =
  s.object<TerminalReassignmentTarget2>({
    companyId: s.optional(s.string()),
    inventory: s.boolean(),
    merchantId: s.optional(s.string()),
    storeId: s.optional(s.string()),
  });

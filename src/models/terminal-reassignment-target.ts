import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalReassignmentTarget = {
  companyId?: string;
  inventory: boolean;
  merchantId?: string;
  storeId?: string;
};

export const terminalReassignmentTargetSchema: Schema<TerminalReassignmentTarget> =
  s.object<TerminalReassignmentTarget>({
    companyId: s.optional(s.string()),
    inventory: s.boolean(),
    merchantId: s.optional(s.string()),
    storeId: s.optional(s.string()),
  });

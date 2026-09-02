import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalReassignmentRequest = {
  companyId?: string;
  inventory?: boolean;
  merchantId?: string;
  storeId?: string;
};

export const terminalReassignmentRequestSchema: Schema<TerminalReassignmentRequest> =
  s.object<TerminalReassignmentRequest>({
    companyId: s.optional(s.string()),
    inventory: s.optional(s.boolean()),
    merchantId: s.optional(s.string()),
    storeId: s.optional(s.string()),
  });

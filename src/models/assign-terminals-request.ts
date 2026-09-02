import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssignTerminalsRequest = {
  companyAccount: string;
  merchantAccount?: string;
  merchantInventory?: boolean;
  store?: string;
  terminals: string[];
};

export const assignTerminalsRequestSchema: Schema<AssignTerminalsRequest> = s.object<AssignTerminalsRequest>({
  companyAccount: s.string(),
  merchantAccount: s.optional(s.string()),
  merchantInventory: s.optional(s.boolean()),
  store: s.optional(s.string()),
  terminals: s.array(s.string()),
});

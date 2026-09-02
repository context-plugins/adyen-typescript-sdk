import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FindTerminalResponse = {
  companyAccount: string;
  merchantAccount?: string;
  merchantInventory?: boolean;
  store?: string;
  terminal: string;
};

export const findTerminalResponseSchema: Schema<FindTerminalResponse> = s.object<FindTerminalResponse>({
  companyAccount: s.string(),
  merchantAccount: s.optional(s.string()),
  merchantInventory: s.optional(s.boolean()),
  store: s.optional(s.string()),
  terminal: s.string(),
});

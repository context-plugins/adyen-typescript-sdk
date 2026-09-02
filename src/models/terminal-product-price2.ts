import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalProductPrice2 = {
  currency?: string;
  value?: number;
};

export const terminalProductPrice2Schema: Schema<TerminalProductPrice2> = s.object<TerminalProductPrice2>({
  currency: s.optional(s.string()),
  value: s.optional(s.number()),
});

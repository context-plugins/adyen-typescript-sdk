import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalProductPrice = {
  currency?: string;
  value?: number;
};

export const terminalProductPriceSchema: Schema<TerminalProductPrice> = s.object<TerminalProductPrice>({
  currency: s.optional(s.string()),
  value: s.optional(s.number()),
});

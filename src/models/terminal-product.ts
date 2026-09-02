import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalProductPrice2Schema, type TerminalProductPrice2 } from "./terminal-product-price2.js";

export type TerminalProduct = {
  description?: string;
  id?: string;
  itemsIncluded?: string[];
  name?: string;
  price?: TerminalProductPrice2;
};

export const terminalProductSchema: Schema<TerminalProduct> = s.object<TerminalProduct>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  itemsIncluded: s.optional(s.array(s.string())),
  name: s.optional(s.string()),
  price: s.optional(s.lazy(() => terminalProductPrice2Schema)),
});

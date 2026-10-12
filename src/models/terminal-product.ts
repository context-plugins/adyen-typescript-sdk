import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalProductPrice2Schema, type TerminalProductPrice2 } from "./terminal-product-price2.js";

export type TerminalProduct = {
  /** Information about items included and integration options. */
  description?: string;
  /** The unique identifier of the product. */
  id?: string;
  /** A list of parts included in the terminal package. */
  itemsIncluded?: string[];
  /** The descriptive name of the product. */
  name?: string;
  /** The price of the product. */
  price?: TerminalProductPrice2;
};

export const terminalProductSchema: Schema<TerminalProduct> = s.object<TerminalProduct>({
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  itemsIncluded: s.optional(s.array(s.string())),
  name: s.optional(s.string()),
  price: s.optional(s.lazy(() => terminalProductPrice2Schema)),
});

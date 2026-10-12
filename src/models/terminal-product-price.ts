import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalProductPrice = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency?: string;
  /** The price of the item. */
  value?: number;
};

export const terminalProductPriceSchema: Schema<TerminalProductPrice> = s.object<TerminalProductPrice>({
  currency: s.optional(s.string()),
  value: s.optional(s.float64()),
});

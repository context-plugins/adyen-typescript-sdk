import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The price of the product. */
export type TerminalProductPrice2 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency?: string;
  /** The price of the item. */
  value?: number;
};

export const terminalProductPrice2Schema: Schema<TerminalProductPrice2> = s.object<TerminalProductPrice2>({
  currency: s.optional(s.string()),
  value: s.optional(s.float64()),
});

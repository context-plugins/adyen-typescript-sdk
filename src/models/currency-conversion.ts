import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedAmount1Schema, type ConvertedAmount1 } from "./converted-amount1.js";

/**
 * Information related to a currency conversion. A currency conversion occurred in the payment, and
 * the merchant needs to know information related to this conversion (e.g. to print on the sale
 * receipt).
 */
export type CurrencyConversion = {
  /**
   * Notify if the customer has approved something. Indicates if the customer has accepted a
   * currency conversion.
   *
   * @default true
   */
  customerApprovedFlag?: boolean;
  /** Amount after a currency conversion. */
  convertedAmount: ConvertedAmount1;
  /** Rate of currency conversion. */
  rate?: number;
  /** Markup of a currency conversion amount as a percentage. */
  markup?: number;
  /** Commission for a currency conversion. */
  commission?: number;
  /**
   * Declaration to present to the customer or the cashier for validation. If a declaration has to
   * be presented to the customer.
   */
  declaration?: string;
};

export const currencyConversionSchema: Schema<CurrencyConversion> = s.object<CurrencyConversion>({
  customerApprovedFlag: s.defaulted(s.boolean(), true),
  convertedAmount: convertedAmount1Schema,
  rate: s.optional(s.float64()),
  markup: s.optional(s.float64()),
  commission: s.optional(s.float64()),
  declaration: s.optional(s.string()),
  _keysMap: {
    customerApprovedFlag: "CustomerApprovedFlag",
    convertedAmount: "ConvertedAmount",
    rate: "Rate",
    markup: "Markup",
    commission: "Commission",
    declaration: "Declaration",
  },
});

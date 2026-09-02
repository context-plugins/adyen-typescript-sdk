import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedAmount1Schema, type ConvertedAmount1 } from "./converted-amount1.js";

export type CurrencyConversion = {
  customerApprovedFlag?: boolean;
  convertedAmount: ConvertedAmount1;
  rate?: number;
  markup?: number;
  commission?: number;
  declaration?: string;
};

export const currencyConversionSchema: Schema<CurrencyConversion> = s.object<CurrencyConversion>({
  customerApprovedFlag: s.optional(s.boolean()),
  convertedAmount: convertedAmount1Schema,
  rate: s.optional(s.number()),
  markup: s.optional(s.number()),
  commission: s.optional(s.number()),
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

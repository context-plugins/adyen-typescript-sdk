import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockData2 = {
  marketIdentifier?: string;
  stockNumber?: string;
  tickerSymbol?: string;
};

export const stockData2Schema: Schema<StockData2> = s.object<StockData2>({
  marketIdentifier: s.optional(s.string()),
  stockNumber: s.optional(s.string()),
  tickerSymbol: s.optional(s.string()),
});

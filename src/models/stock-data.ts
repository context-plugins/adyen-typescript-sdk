import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockData = {
  marketIdentifier?: string;
  stockNumber?: string;
  tickerSymbol?: string;
};

export const stockDataSchema: Schema<StockData> = s.object<StockData>({
  marketIdentifier: s.optional(s.string()),
  stockNumber: s.optional(s.string()),
  tickerSymbol: s.optional(s.string()),
});

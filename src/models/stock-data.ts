import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockData = {
  /**
   * The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code)
   * of the stock market where the organization's stocks are traded.
   */
  marketIdentifier?: string;
  /**
   * The 12-digit International Securities Identification Number (ISIN) of the company, without
   * dashes (-).
   */
  stockNumber?: string;
  /** The stock ticker symbol. */
  tickerSymbol?: string;
};

export const stockDataSchema: Schema<StockData> = s.object<StockData>({
  marketIdentifier: s.optional(s.string()),
  stockNumber: s.optional(s.string()),
  tickerSymbol: s.optional(s.string()),
});

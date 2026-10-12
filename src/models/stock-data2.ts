import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the organization's publicly traded stock. Provide this object only if `type` is
 * **listedPublicCompany**.
 */
export type StockData2 = {
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

export const stockData2Schema: Schema<StockData2> = s.object<StockData2>({
  marketIdentifier: s.optional(s.string()),
  stockNumber: s.optional(s.string()),
  tickerSymbol: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UltimateParentCompanyBusinessDetails = {
  /** The legal name of the company. */
  legalBusinessName?: string;
  /** The registration number of the company. */
  registrationNumber?: string;
  /** Market Identifier Code (MIC). */
  stockExchange?: string;
  /** International Securities Identification Number (ISIN). */
  stockNumber?: string;
  /** Stock Ticker symbol. */
  stockTicker?: string;
};

export const ultimateParentCompanyBusinessDetailsSchema: Schema<UltimateParentCompanyBusinessDetails> =
  s.object<UltimateParentCompanyBusinessDetails>({
    legalBusinessName: s.optional(s.string()),
    registrationNumber: s.optional(s.string()),
    stockExchange: s.optional(s.string()),
    stockNumber: s.optional(s.string()),
    stockTicker: s.optional(s.string()),
  });

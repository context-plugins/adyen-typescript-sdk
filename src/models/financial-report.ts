import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FinancialReport = {
  /** The annual turnover of the business. */
  annualTurnover?: string;
  /** The balance sheet total of the business. */
  balanceSheetTotal?: string;
  /** The currency used for the annual turnover, balance sheet total, and net assets. */
  currencyOfFinancialData?: string;
  /** The date the financial data were provided, in YYYY-MM-DD format. */
  dateOfFinancialData?: string;
  /** The number of employees of the business. */
  employeeCount?: string;
  /** The net assets of the business. */
  netAssets?: string;
};

export const financialReportSchema: Schema<FinancialReport> = s.object<FinancialReport>({
  annualTurnover: s.optional(s.string()),
  balanceSheetTotal: s.optional(s.string()),
  currencyOfFinancialData: s.optional(s.string()),
  dateOfFinancialData: s.optional(s.string()),
  employeeCount: s.optional(s.string()),
  netAssets: s.optional(s.string()),
});

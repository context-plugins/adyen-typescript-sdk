import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FinancialReport = {
  annualTurnover?: string;
  balanceSheetTotal?: string;
  currencyOfFinancialData?: string;
  dateOfFinancialData?: string;
  employeeCount?: string;
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

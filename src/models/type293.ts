import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type293 = {
  NonFinancialNonReportable: "nonFinancialNonReportable",
  FinancialNonReportable: "financialNonReportable",
  NonFinancialActive: "nonFinancialActive",
  NonFinancialPassive: "nonFinancialPassive",
} as const;
export type Type293 = (typeof Type293)[keyof typeof Type293] | (string & {});

export const type293Schema: EnumSchema<Type293> = s.enumOf<Type293>(Type293);

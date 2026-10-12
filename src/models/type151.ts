import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The tax reporting classification type.
 *
 * Possible values: **nonFinancialNonReportable**, **financialNonReportable**,
 * **nonFinancialActive**, **nonFinancialPassive**.
 */
export const Type151 = {
  NonFinancialNonReportable: "nonFinancialNonReportable",
  FinancialNonReportable: "financialNonReportable",
  NonFinancialActive: "nonFinancialActive",
  NonFinancialPassive: "nonFinancialPassive",
} as const;
export type Type151 = (typeof Type151)[keyof typeof Type151] | (string & {});

export const type151Schema: EnumSchema<Type151> = s.enumOf<Type151>(Type151);

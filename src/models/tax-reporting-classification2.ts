import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { mainSourceOfIncomeSchema, type MainSourceOfIncome } from "./main-source-of-income.js";
import { type151Schema, type Type151 } from "./type151.js";

export type TaxReportingClassification2 = {
  businessType?: BusinessType;
  financialInstitutionNumber?: string;
  mainSourceOfIncome?: MainSourceOfIncome;
  type?: Type151;
};

export const taxReportingClassification2Schema: Schema<TaxReportingClassification2> =
  s.object<TaxReportingClassification2>({
    businessType: s.optional(s.lazy(() => businessTypeSchema)),
    financialInstitutionNumber: s.optional(s.string()),
    mainSourceOfIncome: s.optional(s.lazy(() => mainSourceOfIncomeSchema)),
    type: s.optional(s.lazy(() => type151Schema)),
  });

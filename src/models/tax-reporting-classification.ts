import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { mainSourceOfIncomeSchema, type MainSourceOfIncome } from "./main-source-of-income.js";
import { type293Schema, type Type293 } from "./type293.js";

export type TaxReportingClassification = {
  businessType?: BusinessType;
  financialInstitutionNumber?: string;
  mainSourceOfIncome?: MainSourceOfIncome;
  type?: Type293;
};

export const taxReportingClassificationSchema: Schema<TaxReportingClassification> =
  s.object<TaxReportingClassification>({
    businessType: s.optional(s.lazy(() => businessTypeSchema)),
    financialInstitutionNumber: s.optional(s.string()),
    mainSourceOfIncome: s.optional(s.lazy(() => mainSourceOfIncomeSchema)),
    type: s.optional(s.lazy(() => type293Schema)),
  });

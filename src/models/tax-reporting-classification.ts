import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { mainSourceOfIncomeSchema, type MainSourceOfIncome } from "./main-source-of-income.js";
import { type151Schema, type Type151 } from "./type151.js";

export type TaxReportingClassification = {
  /**
   * The organization's business type.
   *
   * Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**,
   * **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.
   */
  businessType?: BusinessType;
  /**
   * The Global Intermediary Identification Number (GIIN) required for FATCA. Only required if the
   * organization is a US financial institution and the `businessType` is **financialInstitution**.
   */
  financialInstitutionNumber?: string;
  /**
   * The organization's main source of income. Only required if `businessType` is **other**.
   *
   * Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**,
   * **propertyRental**, **other**.
   */
  mainSourceOfIncome?: MainSourceOfIncome;
  /**
   * The tax reporting classification type.
   *
   * Possible values: **nonFinancialNonReportable**, **financialNonReportable**,
   * **nonFinancialActive**, **nonFinancialPassive**.
   */
  type?: Type151;
};

export const taxReportingClassificationSchema: Schema<TaxReportingClassification> =
  s.object<TaxReportingClassification>({
    businessType: s.optional(s.lazy(() => businessTypeSchema)),
    financialInstitutionNumber: s.optional(s.string()),
    mainSourceOfIncome: s.optional(s.lazy(() => mainSourceOfIncomeSchema)),
    type: s.optional(s.lazy(() => type151Schema)),
  });

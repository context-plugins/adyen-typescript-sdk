import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { mainSourceOfIncomeSchema, type MainSourceOfIncome } from "./main-source-of-income.js";
import { type151Schema, type Type151 } from "./type151.js";

/** The tax reporting classification (FATCA/CRS self-certification) of the organization. */
export type TaxReportingClassification2 = {
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

export const taxReportingClassification2Schema: Schema<TaxReportingClassification2> =
  s.object<TaxReportingClassification2>({
    businessType: s.optional(s.lazy(() => businessTypeSchema)),
    financialInstitutionNumber: s.optional(s.string()),
    mainSourceOfIncome: s.optional(s.lazy(() => mainSourceOfIncomeSchema)),
    type: s.optional(s.lazy(() => type151Schema)),
  });

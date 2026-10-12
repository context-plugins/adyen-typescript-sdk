import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The organization's business type.
 *
 * Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**,
 * **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.
 */
export const BusinessType = {
  Other: "other",
  ListedPublicCompany: "listedPublicCompany",
  SubsidiaryOfListedPublicCompany: "subsidiaryOfListedPublicCompany",
  GovernmentalOrganization: "governmentalOrganization",
  InternationalOrganization: "internationalOrganization",
  FinancialInstitution: "financialInstitution",
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType] | (string & {});

export const businessTypeSchema: EnumSchema<BusinessType> = s.enumOf<BusinessType>(BusinessType);

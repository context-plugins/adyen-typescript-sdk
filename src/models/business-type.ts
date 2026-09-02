import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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

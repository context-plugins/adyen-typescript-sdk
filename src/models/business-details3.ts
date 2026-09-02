import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shareholderContactSchema, type ShareholderContact } from "./shareholder-contact.js";
import { signatoryContactSchema, type SignatoryContact } from "./signatory-contact.js";
import { ultimateParentCompanySchema, type UltimateParentCompany } from "./ultimate-parent-company.js";

export type BusinessDetails3 = {
  doingBusinessAs?: string;
  legalBusinessName?: string;
  listedUltimateParentCompany?: UltimateParentCompany[];
  registrationNumber?: string;
  shareholders?: ShareholderContact[];
  signatories?: SignatoryContact[];
  stockExchange?: string;
  stockNumber?: string;
  stockTicker?: string;
  taxId?: string;
};

export const businessDetails3Schema: Schema<BusinessDetails3> = s.object<BusinessDetails3>({
  doingBusinessAs: s.optional(s.string()),
  legalBusinessName: s.optional(s.string()),
  listedUltimateParentCompany: s.optional(s.array(s.lazy(() => ultimateParentCompanySchema))),
  registrationNumber: s.optional(s.string()),
  shareholders: s.optional(s.array(s.lazy(() => shareholderContactSchema))),
  signatories: s.optional(s.array(s.lazy(() => signatoryContactSchema))),
  stockExchange: s.optional(s.string()),
  stockNumber: s.optional(s.string()),
  stockTicker: s.optional(s.string()),
  taxId: s.optional(s.string()),
});

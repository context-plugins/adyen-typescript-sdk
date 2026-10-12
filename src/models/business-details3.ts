import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shareholderContactSchema, type ShareholderContact } from "./shareholder-contact.js";
import { signatoryContactSchema, type SignatoryContact } from "./signatory-contact.js";
import { ultimateParentCompanySchema, type UltimateParentCompany } from "./ultimate-parent-company.js";

/**
 * Details about the business or nonprofit account holder. Required when creating an account holder
 * with `legalEntity` **Business** or **NonProfit**.
 */
export type BusinessDetails3 = {
  /** The registered name of the company (if it differs from the legal name of the company). */
  doingBusinessAs?: string;
  /** The legal name of the company. */
  legalBusinessName?: string;
  /**
   * Information about the parent public company. Required if the account holder is 100% owned by a
   * publicly listed company.
   */
  listedUltimateParentCompany?: UltimateParentCompany[];
  /** The registration number of the company. */
  registrationNumber?: string;
  /**
   * Array containing information about individuals associated with the account holder either
   * through ownership or control. For details about how you can identify them, refer to [our
   * verification
   * guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos).
   */
  shareholders?: ShareholderContact[];
  /** Signatories associated with the company. Each array entry should represent one signatory. */
  signatories?: SignatoryContact[];
  /** Market Identifier Code (MIC). */
  stockExchange?: string;
  /** International Securities Identification Number (ISIN). */
  stockNumber?: string;
  /** Stock Ticker symbol. */
  stockTicker?: string;
  /** The tax ID of the company. */
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

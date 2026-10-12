import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address41Schema, type Address41 } from "./address41.js";
import { address51Schema, type Address51 } from "./address51.js";
import { financialReportSchema, type FinancialReport } from "./financial-report.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { vatAbsenceReason1Schema, type VatAbsenceReason1 } from "./vat-absence-reason1.js";

/** Information about the sole proprietorship. Required if `type` is **soleProprietorship**. */
export type SoleProprietorship1 = {
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code of the governing country.
   */
  countryOfGoverningLaw: string;
  /** The date when the legal arrangement was incorporated in YYYY-MM-DD format. */
  dateOfIncorporation?: string;
  /** The registered name, if different from the `name`. */
  doingBusinessAs?: string;
  /** Set this to **true** if the legal arrangement does not have a `Doing business as` name. */
  doingBusinessAsAbsent?: boolean | null;
  /** The information from the financial report of the sole proprietorship. */
  financialReports?: FinancialReport[];
  /** The legal name. */
  name: string;
  /**
   * The business address. Required if the principal place of business is different from the
   * `registeredAddress`.
   */
  principalPlaceOfBusiness?: Address41;
  /** The address registered at the registrar, such as the Chamber of Commerce. */
  registeredAddress: Address51;
  /** The registration number. */
  registrationNumber?: string;
  /** The tax information is absent. */
  taxAbsent?: boolean | null;
  /** The tax information of the entity. */
  taxInformation?: TaxInformation[];
  /**
   * The reason for not providing a VAT number.
   *
   * Possible values: **industryExemption**, **belowTaxThreshold**.
   */
  vatAbsenceReason?: VatAbsenceReason1;
  /** The VAT number. */
  vatNumber?: string;
};

export const soleProprietorship1Schema: Schema<SoleProprietorship1> = s.object<SoleProprietorship1>({
  countryOfGoverningLaw: s.string(),
  dateOfIncorporation: s.optional(s.string()),
  doingBusinessAs: s.optional(s.string()),
  doingBusinessAsAbsent: s.optionalNullable(s.boolean()),
  financialReports: s.optional(s.array(s.lazy(() => financialReportSchema))),
  name: s.string(),
  principalPlaceOfBusiness: s.optional(s.lazy(() => address41Schema)),
  registeredAddress: address51Schema,
  registrationNumber: s.optional(s.string()),
  taxAbsent: s.optionalNullable(s.boolean()),
  taxInformation: s.optional(s.array(s.lazy(() => taxInformationSchema))),
  vatAbsenceReason: s.optional(s.lazy(() => vatAbsenceReason1Schema)),
  vatNumber: s.optional(s.string()),
});

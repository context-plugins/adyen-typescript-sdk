import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address22Schema, type Address22 } from "./address22.js";
import { address31Schema, type Address31 } from "./address31.js";
import { financialReportSchema, type FinancialReport } from "./financial-report.js";
import { institutionalSectorSchema, type InstitutionalSector } from "./institutional-sector.js";
import { phoneNumber2Schema, type PhoneNumber2 } from "./phone-number2.js";
import { statusOfLegalProceedingSchema, type StatusOfLegalProceeding } from "./status-of-legal-proceeding.js";
import { stockData2Schema, type StockData2 } from "./stock-data2.js";
import { support1Schema, type Support1 } from "./support1.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import {
  taxReportingClassification2Schema,
  type TaxReportingClassification2,
} from "./tax-reporting-classification2.js";
import { type161Schema, type Type161 } from "./type161.js";
import { vatAbsenceReasonSchema, type VatAbsenceReason } from "./vat-absence-reason.js";
import { webData1Schema, type WebData1 } from "./web-data1.js";

/** Information about the organization. Required if `type` is **organization**. */
export type Organization1 = {
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code of the governing country.
   */
  countryOfGoverningLaw?: string;
  /** The date when the organization was incorporated in YYYY-MM-DD format. */
  dateOfIncorporation?: string;
  /**
   * Required if the value of `statusOfLegalProceeding` is one of the following:
   *
   * **underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**
   *
   * The date at which a legal proceeding was initiated, in **YYYY-MM-DD** format. Example:
   * **2000-02-12**
   */
  dateOfInitiationOfLegalProceeding?: string;
  /** Your description for the organization. */
  description?: string;
  /** The organization's trading name, if different from the registered legal name. */
  doingBusinessAs?: string;
  /**
   * Set this to **true** if the organization or legal arrangement does not have a `Doing business
   * as` name.
   */
  doingBusinessAsAbsent?: boolean | null;
  /**
   * The sector of the economy the legal entity operates within, represented by a 2-4 digit code
   * that may include a ".". Example: 45.11
   *
   * You can locate economic sector codes for your area by referencing codes defined by the NACE
   * (Nomenclature of Economic Activities) used in the European Union.
   */
  economicSector?: string;
  /** The email address of the legal entity. */
  email?: string;
  /** The financial report information of the organization. */
  financialReports?: FinancialReport[];
  /**
   * The global legal entity identifier for the organization.
   *
   * This field is not required if the `registrationNumber` for the organization has been provided.
   */
  globalLegalEntityIdentifier?: string;
  /** Indicates that the registered business address is also the company's headquarters. */
  headOfficeIndicator?: boolean;
  /** The institutional sector the organization operates within. */
  institutionalSector?: InstitutionalSector;
  /**
   * The type of business entity as defined in the national legal system. Use a legal form listed
   * within the accepted legal forms compiled by the Central Bank of Europe.
   */
  legalForm?: string;
  /** The organization's legal name. */
  legalName: string;
  /** The phone number of the legal entity. */
  phone?: PhoneNumber2;
  /**
   * The address where the organization operates from. Provide this if the principal place of
   * business is different from the `registeredAddress`.
   */
  principalPlaceOfBusiness?: Address22;
  /**
   * The address of the organization registered at their registrar (such as the Chamber of
   * Commerce).
   */
  registeredAddress: Address31;
  /** The organization's registration number. */
  registrationNumber?: string;
  /**
   * Set this to **true** if the organization does not have a registration number available. Only
   * applicable for organizations in New Zealand, and incorporated partnerships and government
   * organizations in Australia.
   */
  registrationNumberAbsent?: boolean | null;
  /**
   * The status of any current or past legal action taken against the legal entity.
   *
   * Possible values: **noLegalActionsTaken**, **underJudicialAdministration**,
   * **bankruptcyInsolvency**, **otherLegalMeasures**
   *
   * If the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding`
   * is not required. Otherwise, it is required.
   */
  statusOfLegalProceeding?: StatusOfLegalProceeding;
  /**
   * Information about the organization's publicly traded stock. Provide this object only if `type`
   * is **listedPublicCompany**.
   */
  stockData?: StockData2;
  /** Support information for the legal entity. Required if you have a platform setup. */
  support?: Support1;
  /** The tax information of the organization. */
  taxInformation?: TaxInformation[];
  /** The tax reporting classification (FATCA/CRS self-certification) of the organization. */
  taxReportingClassification?: TaxReportingClassification2;
  /**
   * Type of organization.
   *
   * Possible values: **associationIncorporated**, **governmentalOrganization**,
   * **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
   */
  type?: Type161;
  /**
   * The reason the organization has not provided a VAT number.
   *
   * Possible values: **industryExemption**, **belowTaxThreshold**.
   */
  vatAbsenceReason?: VatAbsenceReason;
  /** The organization's VAT number. */
  vatNumber?: string;
  /** The website and app URL of the legal entity. */
  webData?: WebData1;
};

export const organization1Schema: Schema<Organization1> = s.object<Organization1>({
  countryOfGoverningLaw: s.optional(s.string()),
  dateOfIncorporation: s.optional(s.string()),
  dateOfInitiationOfLegalProceeding: s.optional(s.string()),
  description: s.optional(s.string()),
  doingBusinessAs: s.optional(s.string()),
  doingBusinessAsAbsent: s.optionalNullable(s.boolean()),
  economicSector: s.optional(s.string()),
  email: s.optional(s.string()),
  financialReports: s.optional(s.array(s.lazy(() => financialReportSchema))),
  globalLegalEntityIdentifier: s.optional(s.string()),
  headOfficeIndicator: s.optional(s.boolean()),
  institutionalSector: s.optional(s.lazy(() => institutionalSectorSchema)),
  legalForm: s.optional(s.string()),
  legalName: s.string(),
  phone: s.optional(s.lazy(() => phoneNumber2Schema)),
  principalPlaceOfBusiness: s.optional(s.lazy(() => address22Schema)),
  registeredAddress: address31Schema,
  registrationNumber: s.optional(s.string()),
  registrationNumberAbsent: s.optionalNullable(s.boolean()),
  statusOfLegalProceeding: s.optional(s.lazy(() => statusOfLegalProceedingSchema)),
  stockData: s.optional(s.lazy(() => stockData2Schema)),
  support: s.optional(s.lazy(() => support1Schema)),
  taxInformation: s.optional(s.array(s.lazy(() => taxInformationSchema))),
  taxReportingClassification: s.optional(s.lazy(() => taxReportingClassification2Schema)),
  type: s.optional(s.lazy(() => type161Schema)),
  vatAbsenceReason: s.optional(s.lazy(() => vatAbsenceReasonSchema)),
  vatNumber: s.optional(s.string()),
  webData: s.optional(s.lazy(() => webData1Schema)),
});

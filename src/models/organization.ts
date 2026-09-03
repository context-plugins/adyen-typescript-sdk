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

export type Organization = {
  countryOfGoverningLaw?: string;
  dateOfIncorporation?: string;
  dateOfInitiationOfLegalProceeding?: string;
  description?: string;
  doingBusinessAs?: string;
  doingBusinessAsAbsent?: boolean | null;
  economicSector?: string;
  email?: string;
  financialReports?: FinancialReport[];
  globalLegalEntityIdentifier?: string;
  headOfficeIndicator?: boolean;
  institutionalSector?: InstitutionalSector;
  legalForm?: string;
  legalName: string;
  phone?: PhoneNumber2;
  principalPlaceOfBusiness?: Address22;
  registeredAddress: Address31;
  registrationNumber?: string;
  registrationNumberAbsent?: boolean | null;
  statusOfLegalProceeding?: StatusOfLegalProceeding;
  stockData?: StockData2;
  support?: Support1;
  taxInformation?: TaxInformation[];
  taxReportingClassification?: TaxReportingClassification2;
  type?: Type161;
  vatAbsenceReason?: VatAbsenceReason;
  vatNumber?: string;
  webData?: WebData1;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>({
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

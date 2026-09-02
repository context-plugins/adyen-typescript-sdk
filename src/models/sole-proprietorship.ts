import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address41Schema, type Address41 } from "./address41.js";
import { address51Schema, type Address51 } from "./address51.js";
import { financialReportSchema, type FinancialReport } from "./financial-report.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { vatAbsenceReason1Schema, type VatAbsenceReason1 } from "./vat-absence-reason1.js";

export type SoleProprietorship = {
  countryOfGoverningLaw: string;
  dateOfIncorporation?: string;
  doingBusinessAs?: string;
  doingBusinessAsAbsent?: boolean | null;
  financialReports?: FinancialReport[];
  name: string;
  principalPlaceOfBusiness?: Address41;
  registeredAddress: Address51;
  registrationNumber?: string;
  taxAbsent?: boolean | null;
  taxInformation?: TaxInformation[];
  vatAbsenceReason?: VatAbsenceReason1;
  vatNumber?: string;
};

export const soleProprietorshipSchema: Schema<SoleProprietorship> = s.object<SoleProprietorship>({
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

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType = {
  BankStatement: "BANK_STATEMENT",
  Bsn: "BSN",
  CompanyRegistrationScreening: "COMPANY_REGISTRATION_SCREENING",
  ConstitutionalDocument: "CONSTITUTIONAL_DOCUMENT",
  DrivingLicence: "DRIVING_LICENCE",
  DrivingLicenceBack: "DRIVING_LICENCE_BACK",
  DrivingLicenceFront: "DRIVING_LICENCE_FRONT",
  IdCard: "ID_CARD",
  IdCardBack: "ID_CARD_BACK",
  IdCardFront: "ID_CARD_FRONT",
  Passport: "PASSPORT",
  ProofOfResidency: "PROOF_OF_RESIDENCY",
  Ssn: "SSN",
  SupportingDocuments: "SUPPORTING_DOCUMENTS",
} as const;
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType] | (string & {});

export const documentTypeSchema: EnumSchema<DocumentType> = s.enumOf<DocumentType>(DocumentType);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the document. Refer to [Verification
 * checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each
 * document type should be submitted and for the accepted file formats.
 *
 * Permitted values:
 * * **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of a
 *   specific bank account.
 * * **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company
 *   registration document.
 * * **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal
 *   arrangement.
 * * **PASSPORT**: A file containing the identity page(s) of a passport.
 * * **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document to
 *   be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.
 * * **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to be
 *   usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.
 * * **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order
 *   for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK**
 *   must be submitted.
 * * **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order for
 *   a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT** must
 *   be submitted.
 */
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

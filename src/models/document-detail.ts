import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentTypeSchema, type DocumentType } from "./document-type.js";

export type DocumentDetail = {
  /** The code of account holder, to which the document applies. */
  accountHolderCode?: string;
  /**
   * The Adyen-generated
   * [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID)
   * to which the document must be linked. Refer to [Bank account
   * check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement)
   * for details on when a document should be submitted. >Required if the `documentType` is
   * **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account.
   */
  bankAccountUuid?: string;
  /** Description of the document. */
  description?: string;
  /**
   * The type of the document. Refer to [Verification
   * checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each
   * document type should be submitted and for the accepted file formats.
   *
   * Permitted values:
   * * **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of
   *   a specific bank account.
   * * **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company
   *   registration document.
   * * **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal
   *   arrangement.
   * * **PASSPORT**: A file containing the identity page(s) of a passport.
   * * **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document
   *   to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.
   * * **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to
   *   be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.
   * * **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order
   *   for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK**
   *   must be submitted.
   * * **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order
   *   for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT**
   *   must be submitted.
   */
  documentType: DocumentType;
  /** Filename of the document. */
  filename?: string;
  /**
   * The Adyen-generated
   * [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode)
   * to which the document must be linked.
   */
  legalArrangementCode?: string;
  /**
   * The Adyen-generated
   * [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)
   * to which the document must be linked.
   */
  legalArrangementEntityCode?: string;
  /**
   * The Adyen-generated
   * [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode)
   * to which the document must be linked. Refer to [Verification
   * checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a
   * document should be submitted. >Required if the account holder has a `legalEntity` of type
   * **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**,
   * **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**.
   */
  shareholderCode?: string;
  /**
   * The Adyen-generated
   * [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode)
   * to which the document must be linked.
   */
  signatoryCode?: string;
};

export const documentDetailSchema: Schema<DocumentDetail> = s.object<DocumentDetail>({
  accountHolderCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  documentType: documentTypeSchema,
  filename: s.optional(s.string()),
  legalArrangementCode: s.optional(s.string()),
  legalArrangementEntityCode: s.optional(s.string()),
  shareholderCode: s.optional(s.string()),
  signatoryCode: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});

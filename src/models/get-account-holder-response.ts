import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails3Schema, type AccountHolderDetails3 } from "./account-holder-details3.js";
import { accountHolderStatus3Schema, type AccountHolderStatus3 } from "./account-holder-status3.js";
import { accountSchema, type Account } from "./account.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { kycVerificationResult1Schema, type KycVerificationResult1 } from "./kyc-verification-result1.js";
import { legalEntity2Schema, type LegalEntity2 } from "./legal-entity2.js";
import { migrationData2Schema, type MigrationData2 } from "./migration-data2.js";

export type GetAccountHolderResponse = {
  /** The code of the account holder. */
  accountHolderCode?: string;
  /** Details of the account holder. */
  accountHolderDetails?: AccountHolderDetails3;
  /** The status of the account holder. */
  accountHolderStatus?: AccountHolderStatus3;
  /** A list of the accounts under the account holder. */
  accounts?: Account[];
  /** The description of the account holder. */
  description?: string;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The legal entity of the account holder. */
  legalEntity?: LegalEntity2;
  /** Details of the account holder migrated to the balance platform. */
  migrationData?: MigrationData2;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective
   * account holder primarily deals.
   */
  primaryCurrency?: string;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
  /** The time that shows how up to date is the information in the response. */
  systemUpToDateTime?: Date;
  /** The details of KYC Verification of the account holder. */
  verification?: KycVerificationResult1;
  /** The identifier of the profile that applies to this entity. */
  verificationProfile?: string;
};

export const getAccountHolderResponseSchema: Schema<GetAccountHolderResponse> =
  s.object<GetAccountHolderResponse>({
    accountHolderCode: s.optional(s.string()),
    accountHolderDetails: s.optional(s.lazy(() => accountHolderDetails3Schema)),
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus3Schema)),
    accounts: s.optional(s.array(s.lazy(() => accountSchema))),
    description: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    legalEntity: s.optional(s.lazy(() => legalEntity2Schema)),
    migrationData: s.optional(s.lazy(() => migrationData2Schema)),
    primaryCurrency: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    systemUpToDateTime: s.optional(s.dateTime()),
    verification: s.optional(s.lazy(() => kycVerificationResult1Schema)),
    verificationProfile: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails2Schema, type AccountHolderDetails2 } from "./account-holder-details2.js";
import { accountHolderStatus2Schema, type AccountHolderStatus2 } from "./account-holder-status2.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { kycVerificationResult1Schema, type KycVerificationResult1 } from "./kyc-verification-result1.js";
import { legalEntity1Schema, type LegalEntity1 } from "./legal-entity1.js";

export type CreateAccountHolderResponse = {
  /** The code of a new account created for the account holder. */
  accountCode?: string;
  /** The code of the new account holder. */
  accountHolderCode?: string;
  /** Details of the new account holder. */
  accountHolderDetails?: AccountHolderDetails2;
  /** The status of the new account holder. */
  accountHolderStatus?: AccountHolderStatus2;
  /** The description of the new account holder. */
  description?: string;
  /** A list of fields that caused the `/createAccountHolder` request to fail. */
  invalidFields?: ErrorFieldType[];
  /** The type of legal entity of the new account holder. */
  legalEntity?: LegalEntity1;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective
   * account holder primarily deals.
   *
   * @deprecated
   */
  primaryCurrency?: string;
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
  /** The details of KYC Verification of the account holder. */
  verification?: KycVerificationResult1;
  /** The identifier of the profile that applies to this entity. */
  verificationProfile?: string;
};

export const createAccountHolderResponseSchema: Schema<CreateAccountHolderResponse> =
  s.object<CreateAccountHolderResponse>({
    accountCode: s.optional(s.string()),
    accountHolderCode: s.optional(s.string()),
    accountHolderDetails: s.optional(s.lazy(() => accountHolderDetails2Schema)),
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus2Schema)),
    description: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    legalEntity: s.optional(s.lazy(() => legalEntity1Schema)),
    primaryCurrency: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    verification: s.optional(s.lazy(() => kycVerificationResult1Schema)),
    verificationProfile: s.optional(s.string()),
  });

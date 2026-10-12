import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails3Schema, type AccountHolderDetails3 } from "./account-holder-details3.js";
import { accountHolderStatus7Schema, type AccountHolderStatus7 } from "./account-holder-status7.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { kycVerificationResult1Schema, type KycVerificationResult1 } from "./kyc-verification-result1.js";
import { legalEntity2Schema, type LegalEntity2 } from "./legal-entity2.js";

export type UpdateAccountHolderResponse = {
  /** The code of the account holder. */
  accountHolderCode?: string;
  /** Details of the account holder. */
  accountHolderDetails?: AccountHolderDetails3;
  /** The new status of the account holder. */
  accountHolderStatus?: AccountHolderStatus7;
  /** The description of the account holder. */
  description?: string;
  /**
   * in case the account holder has not been updated, contains account holder fields, that did not
   * pass the validation.
   */
  invalidFields?: ErrorFieldType[];
  /** The legal entity of the account holder. */
  legalEntity?: LegalEntity2;
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

export const updateAccountHolderResponseSchema: Schema<UpdateAccountHolderResponse> =
  s.object<UpdateAccountHolderResponse>({
    accountHolderCode: s.optional(s.string()),
    accountHolderDetails: s.optional(s.lazy(() => accountHolderDetails3Schema)),
    accountHolderStatus: s.optional(s.lazy(() => accountHolderStatus7Schema)),
    description: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    legalEntity: s.optional(s.lazy(() => legalEntity2Schema)),
    primaryCurrency: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    verification: s.optional(s.lazy(() => kycVerificationResult1Schema)),
    verificationProfile: s.optional(s.string()),
  });

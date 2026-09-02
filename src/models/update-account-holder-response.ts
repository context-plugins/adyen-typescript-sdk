import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails3Schema, type AccountHolderDetails3 } from "./account-holder-details3.js";
import { accountHolderStatus7Schema, type AccountHolderStatus7 } from "./account-holder-status7.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { kycVerificationResult1Schema, type KycVerificationResult1 } from "./kyc-verification-result1.js";
import { legalEntity2Schema, type LegalEntity2 } from "./legal-entity2.js";

export type UpdateAccountHolderResponse = {
  accountHolderCode?: string;
  accountHolderDetails?: AccountHolderDetails3;
  accountHolderStatus?: AccountHolderStatus7;
  description?: string;
  invalidFields?: ErrorFieldType[];
  legalEntity?: LegalEntity2;
  primaryCurrency?: string;
  pspReference?: string;
  resultCode?: string;
  verification?: KycVerificationResult1;
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

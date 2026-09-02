import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails2Schema, type AccountHolderDetails2 } from "./account-holder-details2.js";
import { accountHolderStatus2Schema, type AccountHolderStatus2 } from "./account-holder-status2.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { kycVerificationResult1Schema, type KycVerificationResult1 } from "./kyc-verification-result1.js";
import { legalEntity1Schema, type LegalEntity1 } from "./legal-entity1.js";

export type CreateAccountHolderResponse = {
  accountCode?: string;
  accountHolderCode?: string;
  accountHolderDetails?: AccountHolderDetails2;
  accountHolderStatus?: AccountHolderStatus2;
  description?: string;
  invalidFields?: ErrorFieldType[];
  legalEntity?: LegalEntity1;
  primaryCurrency?: string;
  pspReference?: string;
  resultCode?: string;
  verification?: KycVerificationResult1;
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

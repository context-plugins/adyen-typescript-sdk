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
  accountHolderCode?: string;
  accountHolderDetails?: AccountHolderDetails3;
  accountHolderStatus?: AccountHolderStatus3;
  accounts?: Account[];
  description?: string;
  invalidFields?: ErrorFieldType[];
  legalEntity?: LegalEntity2;
  migrationData?: MigrationData2;
  primaryCurrency?: string;
  pspReference?: string;
  resultCode?: string;
  systemUpToDateTime?: Date;
  verification?: KycVerificationResult1;
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails1Schema, type AccountHolderDetails1 } from "./account-holder-details1.js";
import { legalEntitySchema, type LegalEntity } from "./legal-entity.js";

export type CreateAccountHolderRequest = {
  accountHolderCode: string;
  accountHolderDetails: AccountHolderDetails1;
  createDefaultAccount?: boolean;
  description?: string;
  legalEntity: LegalEntity;
  primaryCurrency?: string;
  processingTier?: number;
  verificationProfile?: string;
};

export const createAccountHolderRequestSchema: Schema<CreateAccountHolderRequest> =
  s.object<CreateAccountHolderRequest>({
    accountHolderCode: s.string(),
    accountHolderDetails: accountHolderDetails1Schema,
    createDefaultAccount: s.optional(s.boolean()),
    description: s.optional(s.string()),
    legalEntity: legalEntitySchema,
    primaryCurrency: s.optional(s.string()),
    processingTier: s.optional(s.number()),
    verificationProfile: s.optional(s.string()),
  });

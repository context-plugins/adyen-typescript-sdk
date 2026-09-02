import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails4Schema, type AccountHolderDetails4 } from "./account-holder-details4.js";
import { legalEntitySchema, type LegalEntity } from "./legal-entity.js";

export type UpdateAccountHolderRequest = {
  accountHolderCode: string;
  accountHolderDetails?: AccountHolderDetails4;
  description?: string;
  legalEntity?: LegalEntity;
  primaryCurrency?: string;
  processingTier?: number;
  verificationProfile?: string;
};

export const updateAccountHolderRequestSchema: Schema<UpdateAccountHolderRequest> =
  s.object<UpdateAccountHolderRequest>({
    accountHolderCode: s.string(),
    accountHolderDetails: s.optional(s.lazy(() => accountHolderDetails4Schema)),
    description: s.optional(s.string()),
    legalEntity: s.optional(s.lazy(() => legalEntitySchema)),
    primaryCurrency: s.optional(s.string()),
    processingTier: s.optional(s.number()),
    verificationProfile: s.optional(s.string()),
  });

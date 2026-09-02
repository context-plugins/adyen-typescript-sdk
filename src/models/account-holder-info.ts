import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderCapabilitySchema, type AccountHolderCapability } from "./account-holder-capability.js";
import { contactDetails1Schema, type ContactDetails1 } from "./contact-details1.js";

export type AccountHolderInfo = {
  balancePlatform?: string;
  capabilities?: Record<string, AccountHolderCapability>;
  contactDetails?: ContactDetails1;
  description?: string;
  legalEntityId: string;
  metadata?: Record<string, string>;
  migratedAccountHolderCode?: string;
  reference?: string;
  timeZone?: string;
};

export const accountHolderInfoSchema: Schema<AccountHolderInfo> = s.object<AccountHolderInfo>({
  balancePlatform: s.optional(s.string()),
  capabilities: s.optional(
    s.record(
      s.string(),
      s.lazy(() => accountHolderCapabilitySchema),
    ),
  ),
  contactDetails: s.optional(s.lazy(() => contactDetails1Schema)),
  description: s.optional(s.string()),
  legalEntityId: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
  migratedAccountHolderCode: s.optional(s.string()),
  reference: s.optional(s.string()),
  timeZone: s.optional(s.string()),
});

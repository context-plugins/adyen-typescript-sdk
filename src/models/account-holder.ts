import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderCapabilitySchema, type AccountHolderCapability } from "./account-holder-capability.js";
import { contactDetails1Schema, type ContactDetails1 } from "./contact-details1.js";
import { status10Schema, type Status10 } from "./status10.js";
import { verificationDeadlineSchema, type VerificationDeadline } from "./verification-deadline.js";

export type AccountHolder = {
  balancePlatform?: string;
  capabilities?: Record<string, AccountHolderCapability>;
  contactDetails?: ContactDetails1;
  description?: string;
  id: string;
  legalEntityId: string;
  metadata?: Record<string, string>;
  migratedAccountHolderCode?: string;
  primaryBalanceAccount?: string;
  reference?: string;
  status?: Status10;
  timeZone?: string;
  verificationDeadlines?: VerificationDeadline[];
};

export const accountHolderSchema: Schema<AccountHolder> = s.object<AccountHolder>({
  balancePlatform: s.optional(s.string()),
  capabilities: s.optional(
    s.record(
      s.string(),
      s.lazy(() => accountHolderCapabilitySchema),
    ),
  ),
  contactDetails: s.optional(s.lazy(() => contactDetails1Schema)),
  description: s.optional(s.string()),
  id: s.string(),
  legalEntityId: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
  migratedAccountHolderCode: s.optional(s.string()),
  primaryBalanceAccount: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status10Schema)),
  timeZone: s.optional(s.string()),
  verificationDeadlines: s.optional(s.array(s.lazy(() => verificationDeadlineSchema))),
});

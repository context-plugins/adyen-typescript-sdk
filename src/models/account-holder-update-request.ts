import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderCapabilitySchema, type AccountHolderCapability } from "./account-holder-capability.js";
import { contactDetails1Schema, type ContactDetails1 } from "./contact-details1.js";
import { status9Schema, type Status9 } from "./status9.js";
import { verificationDeadlineSchema, type VerificationDeadline } from "./verification-deadline.js";

export type AccountHolderUpdateRequest = {
  balancePlatform?: string;
  capabilities?: Record<string, AccountHolderCapability>;
  contactDetails?: ContactDetails1;
  description?: string;
  metadata?: Record<string, string>;
  migratedAccountHolderCode?: string;
  primaryBalanceAccount?: string;
  reference?: string;
  status?: Status9;
  timeZone?: string;
  verificationDeadlines?: VerificationDeadline[];
};

export const accountHolderUpdateRequestSchema: Schema<AccountHolderUpdateRequest> =
  s.object<AccountHolderUpdateRequest>({
    balancePlatform: s.optional(s.string()),
    capabilities: s.optional(
      s.record(
        s.string(),
        s.lazy(() => accountHolderCapabilitySchema),
      ),
    ),
    contactDetails: s.optional(s.lazy(() => contactDetails1Schema)),
    description: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    migratedAccountHolderCode: s.optional(s.string()),
    primaryBalanceAccount: s.optional(s.string()),
    reference: s.optional(s.string()),
    status: s.optional(s.lazy(() => status9Schema)),
    timeZone: s.optional(s.string()),
    verificationDeadlines: s.optional(s.array(s.lazy(() => verificationDeadlineSchema))),
  });

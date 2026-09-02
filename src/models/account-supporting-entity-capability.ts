import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { requestedLevelSchema, type RequestedLevel } from "./requested-level.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type AccountSupportingEntityCapability = {
  allowed?: boolean;
  allowedLevel?: AllowedLevel;
  enabled?: boolean;
  id?: string;
  requested?: boolean;
  requestedLevel?: RequestedLevel;
  verificationStatus?: VerificationStatus;
};

export const accountSupportingEntityCapabilitySchema: Schema<AccountSupportingEntityCapability> =
  s.object<AccountSupportingEntityCapability>({
    allowed: s.optional(s.boolean()),
    allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
    enabled: s.optional(s.boolean()),
    id: s.optional(s.string()),
    requested: s.optional(s.boolean()),
    requestedLevel: s.optional(s.lazy(() => requestedLevelSchema)),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
  });

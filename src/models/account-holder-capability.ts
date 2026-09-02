import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountSupportingEntityCapabilitySchema,
  type AccountSupportingEntityCapability,
} from "./account-supporting-entity-capability.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { capabilityProblemSchema, type CapabilityProblem } from "./capability-problem.js";
import { capabilitySettings1Schema, type CapabilitySettings1 } from "./capability-settings1.js";
import { capabilitySettings3Schema, type CapabilitySettings3 } from "./capability-settings3.js";
import { requestedLevelSchema, type RequestedLevel } from "./requested-level.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type AccountHolderCapability = {
  allowed?: boolean;
  allowedLevel?: AllowedLevel;
  allowedSettings?: CapabilitySettings3;
  enabled?: boolean;
  problems?: CapabilityProblem[];
  requested?: boolean;
  requestedLevel?: RequestedLevel;
  requestedSettings?: CapabilitySettings1;
  transferInstruments?: AccountSupportingEntityCapability[];
  verificationStatus?: VerificationStatus;
};

export const accountHolderCapabilitySchema: Schema<AccountHolderCapability> =
  s.object<AccountHolderCapability>({
    allowed: s.optional(s.boolean()),
    allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
    allowedSettings: s.optional(s.lazy(() => capabilitySettings3Schema)),
    enabled: s.optional(s.boolean()),
    problems: s.optional(s.array(s.lazy(() => capabilityProblemSchema))),
    requested: s.optional(s.boolean()),
    requestedLevel: s.optional(s.lazy(() => requestedLevelSchema)),
    requestedSettings: s.optional(s.lazy(() => capabilitySettings1Schema)),
    transferInstruments: s.optional(s.array(s.lazy(() => accountSupportingEntityCapabilitySchema))),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
  });

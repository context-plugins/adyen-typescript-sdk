import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { capabilitySettings11Schema, type CapabilitySettings11 } from "./capability-settings11.js";
import { capabilitySettings21Schema, type CapabilitySettings21 } from "./capability-settings21.js";
import {
  supportingEntityCapabilitySchema,
  type SupportingEntityCapability,
} from "./supporting-entity-capability.js";

export type LegalEntityCapability = {
  allowed?: boolean;
  allowedLevel?: AllowedLevel;
  allowedSettings?: CapabilitySettings11;
  requested?: boolean;
  requestedLevel?: AllowedLevel;
  requestedSettings?: CapabilitySettings21;
  transferInstruments?: SupportingEntityCapability[];
  verificationStatus?: string;
};

export const legalEntityCapabilitySchema: Schema<LegalEntityCapability> = s.object<LegalEntityCapability>({
  allowed: s.optional(s.boolean()),
  allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
  allowedSettings: s.optional(s.lazy(() => capabilitySettings11Schema)),
  requested: s.optional(s.boolean()),
  requestedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
  requestedSettings: s.optional(s.lazy(() => capabilitySettings21Schema)),
  transferInstruments: s.optional(s.array(s.lazy(() => supportingEntityCapabilitySchema))),
  verificationStatus: s.optional(s.string()),
});

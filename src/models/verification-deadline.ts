import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";

export type VerificationDeadline = {
  capabilities: Capability[];
  entityIds?: string[];
  expiresAt: Date;
};

export const verificationDeadlineSchema: Schema<VerificationDeadline> = s.object<VerificationDeadline>({
  capabilities: s.array(s.lazy(() => capabilitySchema)),
  entityIds: s.optional(s.array(s.string())),
  expiresAt: s.dateTime(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";

export type VerificationDeadline = {
  /** The names of the capabilities to be disallowed. */
  capabilities: Capability[];
  /** The unique identifiers of the bank account(s) that the deadline applies to */
  entityIds?: string[];
  /** The date that verification is due by before capabilities are disallowed. */
  expiresAt: Date;
};

export const verificationDeadlineSchema: Schema<VerificationDeadline> = s.object<VerificationDeadline>({
  capabilities: s.array(s.lazy(() => capabilitySchema)),
  entityIds: s.optional(s.array(s.string())),
  expiresAt: s.dateTime(),
});

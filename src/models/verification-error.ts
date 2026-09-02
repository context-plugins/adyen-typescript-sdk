import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type311Schema, type Type311 } from "./type311.js";
import {
  verificationErrorRecursiveSchema,
  type VerificationErrorRecursive,
} from "./verification-error-recursive.js";

export type VerificationError = {
  capabilities?: Capability[];
  code?: string;
  message?: string;
  remediatingActions?: RemediatingAction[];
  subErrors?: VerificationErrorRecursive[];
  type?: Type311;
};

export const verificationErrorSchema: Schema<VerificationError> = s.object<VerificationError>({
  capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  subErrors: s.optional(s.array(s.lazy(() => verificationErrorRecursiveSchema))),
  type: s.optional(s.lazy(() => type311Schema)),
});

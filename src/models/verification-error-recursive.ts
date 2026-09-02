import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type311Schema, type Type311 } from "./type311.js";

export type VerificationErrorRecursive = {
  capabilities?: Capability[];
  code?: string;
  message?: string;
  type?: Type311;
  remediatingActions?: RemediatingAction[];
};

export const verificationErrorRecursiveSchema: Schema<VerificationErrorRecursive> =
  s.object<VerificationErrorRecursive>({
    capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    type: s.optional(s.lazy(() => type311Schema)),
    remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  });

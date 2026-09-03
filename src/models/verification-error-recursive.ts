import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type212Schema, type Type212 } from "./type212.js";

export type VerificationErrorRecursive = {
  capabilities?: Capability[];
  code?: string;
  message?: string;
  type?: Type212;
  remediatingActions?: RemediatingAction[];
};

export const verificationErrorRecursiveSchema: Schema<VerificationErrorRecursive> =
  s.object<VerificationErrorRecursive>({
    capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    type: s.optional(s.lazy(() => type212Schema)),
    remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  });

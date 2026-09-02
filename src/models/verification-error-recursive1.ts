import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type193Schema, type Type193 } from "./type193.js";

export type VerificationErrorRecursive1 = {
  capabilities?: Capability[];
  code?: string;
  message?: string;
  type?: Type193;
  remediatingActions?: RemediatingAction[];
};

export const verificationErrorRecursive1Schema: Schema<VerificationErrorRecursive1> =
  s.object<VerificationErrorRecursive1>({
    capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    type: s.optional(s.lazy(() => type193Schema)),
    remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  });

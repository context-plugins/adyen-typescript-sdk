import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type512Schema, type Type512 } from "./type512.js";
import {
  verificationErrorRecursive1Schema,
  type VerificationErrorRecursive1,
} from "./verification-error-recursive1.js";

export type VerificationError1 = {
  capabilities?: Capability[];
  code?: string;
  message?: string;
  remediatingActions?: RemediatingAction[];
  subErrors?: VerificationErrorRecursive1[];
  type?: Type512;
};

export const verificationError1Schema: Schema<VerificationError1> = s.object<VerificationError1>({
  capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  subErrors: s.optional(s.array(s.lazy(() => verificationErrorRecursive1Schema))),
  type: s.optional(s.lazy(() => type512Schema)),
});

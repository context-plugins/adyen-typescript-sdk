import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type212Schema, type Type212 } from "./type212.js";

export type VerificationErrorRecursive = {
  /** Contains the capabilities that the verification error applies to. */
  capabilities?: Capability[];
  /** The verification error code. */
  code?: string;
  /** A description of the error. */
  message?: string;
  /**
   * The type of error.
   *
   *
   *
   * Possible values:
   * * **invalidInput**
   * * **dataMissing**
   * * **pendingStatus**
   * * **dataReview**
   */
  type?: Type212;
  /** Contains the actions that you can take to resolve the verification error. */
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type212Schema, type Type212 } from "./type212.js";
import {
  verificationErrorRecursiveSchema,
  type VerificationErrorRecursive,
} from "./verification-error-recursive.js";

export type VerificationError = {
  /** Contains the capabilities that the verification error applies to. */
  capabilities?: Capability[];
  /** The verification error code. */
  code?: string;
  /** A description of the error. */
  message?: string;
  /** Contains the actions that you can take to resolve the verification error. */
  remediatingActions?: RemediatingAction[];
  /** Contains more granular information about the verification error. */
  subErrors?: VerificationErrorRecursive[];
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
};

export const verificationErrorSchema: Schema<VerificationError> = s.object<VerificationError>({
  capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  subErrors: s.optional(s.array(s.lazy(() => verificationErrorRecursiveSchema))),
  type: s.optional(s.lazy(() => type212Schema)),
});

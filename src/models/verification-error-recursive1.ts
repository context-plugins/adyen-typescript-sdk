import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { remediatingActionSchema, type RemediatingAction } from "./remediating-action.js";
import { type512Schema, type Type512 } from "./type512.js";

export type VerificationErrorRecursive1 = {
  /**
   * Contains key-value pairs that specify the actions that the legal entity can do in your
   * platform. The key is a capability required for your integration. For example, **issueCard** for
   * Issuing.The value is an object containing the settings for the capability.
   */
  capabilities?: Capability[];
  /** The general error code. */
  code?: string;
  /** The general error message. */
  message?: string;
  /**
   * The type of error.
   *
   * Possible values:
   * * **invalidInput**
   * * **dataMissing**
   * * **pendingStatus**
   * * **rejected**
   * * **dataReview**
   */
  type?: Type512;
  /** An object containing possible solutions to fix a verification error. */
  remediatingActions?: RemediatingAction[];
};

export const verificationErrorRecursive1Schema: Schema<VerificationErrorRecursive1> =
  s.object<VerificationErrorRecursive1>({
    capabilities: s.optional(s.array(s.lazy(() => capabilitySchema))),
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    type: s.optional(s.lazy(() => type512Schema)),
    remediatingActions: s.optional(s.array(s.lazy(() => remediatingActionSchema))),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountSupportingEntityCapabilitySchema,
  type AccountSupportingEntityCapability,
} from "./account-supporting-entity-capability.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { capabilityProblemSchema, type CapabilityProblem } from "./capability-problem.js";
import { capabilitySettings1Schema, type CapabilitySettings1 } from "./capability-settings1.js";
import { capabilitySettings3Schema, type CapabilitySettings3 } from "./capability-settings3.js";
import { requestedLevelSchema, type RequestedLevel } from "./requested-level.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type AccountHolderCapability = {
  /**
   * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is
   * successful and the account holder is permitted to use the capability.
   */
  allowed?: boolean;
  /**
   * The capability level that is allowed for the account holder.
   *
   * Possible values: **notApplicable**, **low**, **medium**, **high**.
   */
  allowedLevel?: AllowedLevel;
  /** A JSON object containing the settings that are allowed for the account holder. */
  allowedSettings?: CapabilitySettings3;
  /**
   * Indicates whether the capability is enabled. If **false**, the capability is temporarily
   * disabled for the account holder.
   */
  enabled?: boolean;
  /** Contains verification errors and the actions that you can take to resolve them. */
  problems?: CapabilityProblem[];
  /**
   * Indicates whether the capability is requested. To check whether the account holder is permitted
   * to use the capability, refer to the `allowed` field.
   */
  requested?: boolean;
  /**
   * The requested level of the capability. Some capabilities, such as those used in [card
   * issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different
   * levels. Levels increase the capability, but also require additional checks and increased
   * monitoring.
   *
   * Possible values: **notApplicable**, **low**, **medium**, **high**.
   */
  requestedLevel?: RequestedLevel;
  /** A JSON object containing the settings that were requested for the account holder. */
  requestedSettings?: CapabilitySettings1;
  /** Contains the status of the transfer instruments associated with this capability. */
  transferInstruments?: AccountSupportingEntityCapability[];
  /**
   * The status of the verification checks for the capability.
   *
   * Possible values:
   *
   * * **pending**: Adyen is running the verification.
   *
   * * **invalid**: The verification failed. Check if the `errors` array contains more information.
   *
   * * **valid**: The verification has been successfully completed.
   *
   * * **rejected**: Adyen has verified the information, but found reasons to not allow the
   *   capability.
   */
  verificationStatus?: VerificationStatus;
};

export const accountHolderCapabilitySchema: Schema<AccountHolderCapability> =
  s.object<AccountHolderCapability>({
    allowed: s.optional(s.boolean()),
    allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
    allowedSettings: s.optional(s.lazy(() => capabilitySettings3Schema)),
    enabled: s.optional(s.boolean()),
    problems: s.optional(s.array(s.lazy(() => capabilityProblemSchema))),
    requested: s.optional(s.boolean()),
    requestedLevel: s.optional(s.lazy(() => requestedLevelSchema)),
    requestedSettings: s.optional(s.lazy(() => capabilitySettings1Schema)),
    transferInstruments: s.optional(s.array(s.lazy(() => accountSupportingEntityCapabilitySchema))),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
  });

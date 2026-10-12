import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { capabilitySettings11Schema, type CapabilitySettings11 } from "./capability-settings11.js";
import { capabilitySettings21Schema, type CapabilitySettings21 } from "./capability-settings21.js";
import {
  supportingEntityCapabilitySchema,
  type SupportingEntityCapability,
} from "./supporting-entity-capability.js";

export type LegalEntityCapability = {
  /**
   * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is
   * successful.
   */
  allowed?: boolean;
  /**
   * The capability level that is allowed for the legal entity.
   *
   * Possible values: **notApplicable**, **low**, **medium**, **high**.
   */
  allowedLevel?: AllowedLevel;
  /** The settings that are allowed for the legal entity. */
  allowedSettings?: CapabilitySettings11;
  /**
   * Indicates whether the capability is requested. To check whether the legal entity is permitted
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
  requestedLevel?: AllowedLevel;
  /** The settings that are requested for the legal entity. */
  requestedSettings?: CapabilitySettings21;
  /** The capability status of transfer instruments associated with the legal entity. */
  transferInstruments?: SupportingEntityCapability[];
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
  verificationStatus?: string;
};

export const legalEntityCapabilitySchema: Schema<LegalEntityCapability> = s.object<LegalEntityCapability>({
  allowed: s.optional(s.boolean()),
  allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
  allowedSettings: s.optional(s.lazy(() => capabilitySettings11Schema)),
  requested: s.optional(s.boolean()),
  requestedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
  requestedSettings: s.optional(s.lazy(() => capabilitySettings21Schema)),
  transferInstruments: s.optional(s.array(s.lazy(() => supportingEntityCapabilitySchema))),
  verificationStatus: s.optional(s.string()),
});

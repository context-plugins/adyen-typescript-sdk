import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedLevelSchema, type AllowedLevel } from "./allowed-level.js";
import { requestedLevelSchema, type RequestedLevel } from "./requested-level.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type AccountSupportingEntityCapability = {
  /**
   * Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if
   * the verification is successful and the account holder is permitted to use the capability.
   */
  allowed?: boolean;
  /**
   * The capability level that is allowed for the account holder.
   *
   * Possible values: **notApplicable**, **low**, **medium**, **high**.
   */
  allowedLevel?: AllowedLevel;
  /**
   * Indicates whether the capability is enabled. If **false**, the capability is temporarily
   * disabled for the account holder.
   */
  enabled?: boolean;
  /** The ID of the supporting entity. */
  id?: string;
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
  /**
   * The status of the verification checks for the supporting entity capability.
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

export const accountSupportingEntityCapabilitySchema: Schema<AccountSupportingEntityCapability> =
  s.object<AccountSupportingEntityCapability>({
    allowed: s.optional(s.boolean()),
    allowedLevel: s.optional(s.lazy(() => allowedLevelSchema)),
    enabled: s.optional(s.boolean()),
    id: s.optional(s.string()),
    requested: s.optional(s.boolean()),
    requestedLevel: s.optional(s.lazy(() => requestedLevelSchema)),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
  });

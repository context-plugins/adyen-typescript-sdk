import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Payment method status. Possible values:
 * * **valid**
 * * **pending**
 * * **invalid**
 * * **rejected**, The status of the verification checks for the supporting entity capability.
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
 *   capability., The status of the verification checks for the capability.
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
export const VerificationStatus = {
  Valid: "valid",
  Pending: "pending",
  Invalid: "invalid",
  Rejected: "rejected",
} as const;
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus] | (string & {});

export const verificationStatusSchema: EnumSchema<VerificationStatus> =
  s.enumOf<VerificationStatus>(VerificationStatus);

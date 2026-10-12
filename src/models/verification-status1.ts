import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the verification process for the bank account.
 *
 * Possible values:
 * * **valid**: the verification was successful.
 * * **pending**: the verification is in progress.
 * * **invalid**: the information provided is not complete.
 * * **rejected**: there are reasons to refuse working with this entity.
 */
export const VerificationStatus1 = {
  Invalid: "invalid",
  Pending: "pending",
  Rejected: "rejected",
  Valid: "valid",
} as const;
export type VerificationStatus1 =
  | (typeof VerificationStatus1)[keyof typeof VerificationStatus1]
  | (string & {});

export const verificationStatus1Schema: EnumSchema<VerificationStatus1> =
  s.enumOf<VerificationStatus1>(VerificationStatus1);

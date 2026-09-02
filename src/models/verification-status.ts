import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus = {
  Valid: "valid",
  Pending: "pending",
  Invalid: "invalid",
  Rejected: "rejected",
} as const;
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus] | (string & {});

export const verificationStatusSchema: EnumSchema<VerificationStatus> =
  s.enumOf<VerificationStatus>(VerificationStatus);

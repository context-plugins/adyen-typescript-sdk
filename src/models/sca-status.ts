import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of Strong Customer Authentication (SCA). Possible values:
 * * **notPerformed**: the requester was unable to successfully authenticate the request using SCA,
 *   or has an SCA exemption.
 * * **pending**: the request is pending SCA authentication.
 * * **performed**: the request is successfully authenticated using SCA.
 */
export const ScaStatus = {
  NotPerformed: "notPerformed",
  Pending: "pending",
  Performed: "performed",
} as const;
export type ScaStatus = (typeof ScaStatus)[keyof typeof ScaStatus] | (string & {});

export const scaStatusSchema: EnumSchema<ScaStatus> = s.enumOf<ScaStatus>(ScaStatus);

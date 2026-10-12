import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the
 * authentication has been cancelled. For possible values, refer to [3D Secure API
 * reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).
 */
export const ChallengeCancel = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
  _06: "06",
  _07: "07",
} as const;
export type ChallengeCancel = (typeof ChallengeCancel)[keyof typeof ChallengeCancel] | (string & {});

export const challengeCancelSchema: EnumSchema<ChallengeCancel> = s.enumOf<ChallengeCancel>(ChallengeCancel);

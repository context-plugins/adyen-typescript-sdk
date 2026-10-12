import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether a challenge is requested for this transaction. Possible values:
 * * **01** — No preference
 * * **02** — No challenge requested
 * * **03** — Challenge requested (3DS Requestor preference)
 * * **04** — Challenge requested (Mandate)
 * * **05** — No challenge (transactional risk analysis is already performed)
 * * **06** — Data Only
 */
export const ThreeDsRequestorChallengeInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
  _06: "06",
} as const;
export type ThreeDsRequestorChallengeInd =
  | (typeof ThreeDsRequestorChallengeInd)[keyof typeof ThreeDsRequestorChallengeInd]
  | (string & {});

export const threeDsRequestorChallengeIndSchema: EnumSchema<ThreeDsRequestorChallengeInd> =
  s.enumOf<ThreeDsRequestorChallengeInd>(ThreeDsRequestorChallengeInd);

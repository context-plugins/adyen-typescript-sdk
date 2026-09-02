import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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

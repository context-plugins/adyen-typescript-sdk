import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChallengeWindowSize = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
} as const;
export type ChallengeWindowSize =
  | (typeof ChallengeWindowSize)[keyof typeof ChallengeWindowSize]
  | (string & {});

export const challengeWindowSizeSchema: EnumSchema<ChallengeWindowSize> =
  s.enumOf<ChallengeWindowSize>(ChallengeWindowSize);

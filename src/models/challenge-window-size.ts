import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Dimensions of the 3DS2 challenge window to be displayed to the cardholder.
 *
 * Possible values:
 *
 * * **01** - size of 250x400
 * * **02** - size of 390x400
 * * **03** - size of 500x600
 * * **04** - size of 600x400
 * * **05** - Fullscreen
 */
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

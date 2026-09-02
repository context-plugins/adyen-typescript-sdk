import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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

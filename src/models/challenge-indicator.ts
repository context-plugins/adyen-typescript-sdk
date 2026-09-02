import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChallengeIndicator = {
  NoPreference: "noPreference",
  RequestNoChallenge: "requestNoChallenge",
  RequestChallenge: "requestChallenge",
  RequestChallengeAsMandate: "requestChallengeAsMandate",
} as const;
export type ChallengeIndicator = (typeof ChallengeIndicator)[keyof typeof ChallengeIndicator] | (string & {});

export const challengeIndicatorSchema: EnumSchema<ChallengeIndicator> =
  s.enumOf<ChallengeIndicator>(ChallengeIndicator);

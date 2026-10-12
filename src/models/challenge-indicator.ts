import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possibility to specify a preference for receiving a challenge from the issuer. Allowed values:
 * * `noPreference`
 * * `requestNoChallenge`
 * * `requestChallenge`
 * * `requestChallengeAsMandate`
 */
export const ChallengeIndicator = {
  NoPreference: "noPreference",
  RequestNoChallenge: "requestNoChallenge",
  RequestChallenge: "requestChallenge",
  RequestChallengeAsMandate: "requestChallengeAsMandate",
} as const;
export type ChallengeIndicator = (typeof ChallengeIndicator)[keyof typeof ChallengeIndicator] | (string & {});

export const challengeIndicatorSchema: EnumSchema<ChallengeIndicator> =
  s.enumOf<ChallengeIndicator>(ChallengeIndicator);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { challengeCancelSchema, type ChallengeCancel } from "./challenge-cancel.js";
import { exemptionIndicatorSchema, type ExemptionIndicator } from "./exemption-indicator.js";
import {
  threeDsRequestorChallengeIndSchema,
  type ThreeDsRequestorChallengeInd,
} from "./three-ds-requestor-challenge-ind.js";

export type ThreeDs2Result = {
  authenticationValue?: string;
  cavvAlgorithm?: string;
  challengeCancel?: ChallengeCancel;
  dsTransId?: string;
  eci?: string;
  exemptionIndicator?: ExemptionIndicator;
  messageVersion?: string;
  riskScore?: string;
  threeDsRequestorChallengeInd?: ThreeDsRequestorChallengeInd;
  threeDsServerTransId?: string;
  timestamp?: string;
  transStatus?: string;
  transStatusReason?: string;
  whiteListStatus?: string;
};

export const threeDs2ResultSchema: Schema<ThreeDs2Result> = s.object<ThreeDs2Result>({
  authenticationValue: s.optional(s.string()),
  cavvAlgorithm: s.optional(s.string()),
  challengeCancel: s.optional(s.lazy(() => challengeCancelSchema)),
  dsTransId: s.optional(s.string()),
  eci: s.optional(s.string()),
  exemptionIndicator: s.optional(s.lazy(() => exemptionIndicatorSchema)),
  messageVersion: s.optional(s.string()),
  riskScore: s.optional(s.string()),
  threeDsRequestorChallengeInd: s.optional(s.lazy(() => threeDsRequestorChallengeIndSchema)),
  threeDsServerTransId: s.optional(s.string()),
  timestamp: s.optional(s.string()),
  transStatus: s.optional(s.string()),
  transStatusReason: s.optional(s.string()),
  whiteListStatus: s.optional(s.string()),
  _keysMap: {
    dsTransId: "dsTransID",
    threeDsRequestorChallengeInd: "threeDSRequestorChallengeInd",
    threeDsServerTransId: "threeDSServerTransID",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationResponseSchema, type AuthenticationResponse } from "./authentication-response.js";
import { challengeCancelSchema, type ChallengeCancel } from "./challenge-cancel.js";
import { directoryResponseSchema, type DirectoryResponse } from "./directory-response.js";

export type ThreeDSecureData = {
  authenticationResponse?: AuthenticationResponse;
  cavv?: string;
  cavvAlgorithm?: string;
  challengeCancel?: ChallengeCancel;
  directoryResponse?: DirectoryResponse;
  dsTransId?: string;
  eci?: string;
  riskScore?: string;
  threeDsVersion?: string;
  tokenAuthenticationVerificationValue?: string;
  transStatusReason?: string;
  xid?: string;
};

export const threeDSecureDataSchema: Schema<ThreeDSecureData> = s.object<ThreeDSecureData>({
  authenticationResponse: s.optional(s.lazy(() => authenticationResponseSchema)),
  cavv: s.optional(s.string()),
  cavvAlgorithm: s.optional(s.string()),
  challengeCancel: s.optional(s.lazy(() => challengeCancelSchema)),
  directoryResponse: s.optional(s.lazy(() => directoryResponseSchema)),
  dsTransId: s.optional(s.string()),
  eci: s.optional(s.string()),
  riskScore: s.optional(s.string()),
  threeDsVersion: s.optional(s.string()),
  tokenAuthenticationVerificationValue: s.optional(s.string()),
  transStatusReason: s.optional(s.string()),
  xid: s.optional(s.string()),
  _keysMap: {
    dsTransId: "dsTransID",
    threeDsVersion: "threeDSVersion",
  },
});

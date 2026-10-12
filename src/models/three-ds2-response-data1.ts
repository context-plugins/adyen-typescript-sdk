import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response of the 3D Secure 2 authentication. */
export type ThreeDs2ResponseData1 = {
  acsChallengeMandated?: string;
  acsOperatorId?: string;
  acsReferenceNumber?: string;
  acsSignedContent?: string;
  acsTransId?: string;
  acsUrl?: string;
  authenticationType?: string;
  cardHolderInfo?: string;
  cavvAlgorithm?: string;
  challengeIndicator?: string;
  dsReferenceNumber?: string;
  dsTransId?: string;
  exemptionIndicator?: string;
  messageVersion?: string;
  riskScore?: string;
  sdkEphemPubKey?: string;
  threeDsServerTransId?: string;
  transStatus?: string;
  transStatusReason?: string;
};

export const threeDs2ResponseData1Schema: Schema<ThreeDs2ResponseData1> = s.object<ThreeDs2ResponseData1>({
  acsChallengeMandated: s.optional(s.string()),
  acsOperatorId: s.optional(s.string()),
  acsReferenceNumber: s.optional(s.string()),
  acsSignedContent: s.optional(s.string()),
  acsTransId: s.optional(s.string()),
  acsUrl: s.optional(s.string()),
  authenticationType: s.optional(s.string()),
  cardHolderInfo: s.optional(s.string()),
  cavvAlgorithm: s.optional(s.string()),
  challengeIndicator: s.optional(s.string()),
  dsReferenceNumber: s.optional(s.string()),
  dsTransId: s.optional(s.string()),
  exemptionIndicator: s.optional(s.string()),
  messageVersion: s.optional(s.string()),
  riskScore: s.optional(s.string()),
  sdkEphemPubKey: s.optional(s.string()),
  threeDsServerTransId: s.optional(s.string()),
  transStatus: s.optional(s.string()),
  transStatusReason: s.optional(s.string()),
  _keysMap: {
    acsOperatorId: "acsOperatorID",
    acsTransId: "acsTransID",
    acsUrl: "acsURL",
    dsTransId: "dsTransID",
    threeDsServerTransId: "threeDSServerTransID",
  },
});

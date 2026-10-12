import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { challengeCancelSchema, type ChallengeCancel } from "./challenge-cancel.js";
import { exemptionIndicatorSchema, type ExemptionIndicator } from "./exemption-indicator.js";
import {
  threeDsRequestorChallengeIndSchema,
  type ThreeDsRequestorChallengeInd,
} from "./three-ds-requestor-challenge-ind.js";

/** Result of the 3D Secure 2 authentication. */
export type ThreeDs2Result1 = {
  /** The `authenticationValue` value as defined in the 3D Secure 2 specification. */
  authenticationValue?: string;
  /**
   * The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires
   * integrations.
   */
  cavvAlgorithm?: string;
  /**
   * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the
   * authentication has been cancelled. For possible values, refer to [3D Secure API
   * reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).
   */
  challengeCancel?: ChallengeCancel;
  /** The `dsTransID` value as defined in the 3D Secure 2 specification. */
  dsTransId?: string;
  /** The `eci` value as defined in the 3D Secure 2 specification. */
  eci?: string;
  /**
   * Indicates the exemption type that was applied by the issuer to the authentication, if exemption
   * applied. Allowed values:
   * * `lowValue`
   * * `secureCorporate`
   * * `trustedBeneficiary`
   * * `transactionRiskAnalysis`
   */
  exemptionIndicator?: ExemptionIndicator;
  /** The `messageVersion` value as defined in the 3D Secure 2 specification. */
  messageVersion?: string;
  /** Risk score calculated by Cartes Bancaires Directory Server (DS). */
  riskScore?: string;
  /**
   * Indicates whether a challenge is requested for this transaction. Possible values:
   * * **01** — No preference
   * * **02** — No challenge requested
   * * **03** — Challenge requested (3DS Requestor preference)
   * * **04** — Challenge requested (Mandate)
   * * **05** — No challenge (transactional risk analysis is already performed)
   * * **06** — Data Only
   */
  threeDsRequestorChallengeInd?: ThreeDsRequestorChallengeInd;
  /** The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. */
  threeDsServerTransId?: string;
  /** The `timestamp` value of the 3D Secure 2 authentication. */
  timestamp?: string;
  /** The `transStatus` value as defined in the 3D Secure 2 specification. */
  transStatus?: string;
  /**
   * Provides information on why the `transStatus` field has the specified value. For possible
   * values, refer to [our
   * docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).
   */
  transStatusReason?: string;
  /** The `whiteListStatus` value as defined in the 3D Secure 2 specification. */
  whiteListStatus?: string;
};

export const threeDs2Result1Schema: Schema<ThreeDs2Result1> = s.object<ThreeDs2Result1>({
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

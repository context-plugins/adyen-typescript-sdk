import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationResponseSchema, type AuthenticationResponse } from "./authentication-response.js";
import { challengeCancelSchema, type ChallengeCancel } from "./challenge-cancel.js";
import { directoryResponseSchema, type DirectoryResponse } from "./directory-response.js";

/**
 * Authentication data from a [merchant plug-in
 * (MPI)](https://en.wikipedia.org/wiki/Merchant_plug-in) like Mastercard SecureCode, Visa Secure,
 * or Cartes Bancaires. Required for cardholder-initiated transaction (CIT) adjustments.
 */
export type ThreeDSecureData3 = {
  /**
   * In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was
   * frictionless, omit this parameter.
   */
  authenticationResponse?: AuthenticationResponse;
  /** The cardholder authentication value (base64 encoded, 20 bytes in a decoded form). */
  cavv?: string;
  /** The CAVV algorithm used. Include this only for 3D Secure 1. */
  cavvAlgorithm?: string;
  /**
   * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the
   * authentication has been cancelled. For possible values, refer to [3D Secure API
   * reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).
   */
  challengeCancel?: ChallengeCancel;
  /** In 3D Secure 2, this is the `transStatus` from the `ARes`. */
  directoryResponse?: DirectoryResponse;
  /**
   * Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server
   * (DS) to identify a single transaction.
   */
  dsTransId?: string;
  /** The electronic commerce indicator. */
  eci?: string;
  /** Risk score calculated by Directory Server (DS). Required for Cartes Bancaires integrations. */
  riskScore?: string;
  /** The version of the 3D Secure protocol. */
  threeDsVersion?: string;
  /** Network token authentication verification value (TAVV). The network token cryptogram. */
  tokenAuthenticationVerificationValue?: string;
  /**
   * Provides information on why the `transStatus` field has the specified value. For possible
   * values, refer to [our
   * docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).
   */
  transStatusReason?: string;
  /**
   * Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded
   * form).
   */
  xid?: string;
};

export const threeDSecureData3Schema: Schema<ThreeDSecureData3> = s.object<ThreeDSecureData3>({
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

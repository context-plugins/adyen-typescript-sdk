import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  threeDsReqPriorAuthMethodSchema,
  type ThreeDsReqPriorAuthMethod,
} from "./three-ds-req-prior-auth-method.js";

/**
 * Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS
 * transaction.
 */
export type ThreeDsRequestorPriorAuthenticationInfo = {
  /**
   * Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.
   */
  threeDsReqPriorAuthData?: string;
  /**
   * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed
   * values:
   * * **01** — Frictionless authentication occurred by ACS.
   * * **02** — Cardholder challenge occurred by ACS.
   * * **03** — AVS verified.
   * * **04** — Other issuer methods.
   */
  threeDsReqPriorAuthMethod?: ThreeDsReqPriorAuthMethod;
  /** Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM */
  threeDsReqPriorAuthTimestamp?: string;
  /**
   * This data element provides additional information to the ACS to determine the best approach for
   * handing a request. This data element contains an ACS Transaction ID for a prior authenticated
   * transaction. For example, the first recurring transaction that was authenticated with the
   * cardholder. Length: 30 characters.
   */
  threeDsReqPriorRef?: string;
};

export const threeDsRequestorPriorAuthenticationInfoSchema: Schema<ThreeDsRequestorPriorAuthenticationInfo> =
  s.object<ThreeDsRequestorPriorAuthenticationInfo>({
    threeDsReqPriorAuthData: s.optional(s.string()),
    threeDsReqPriorAuthMethod: s.optional(s.lazy(() => threeDsReqPriorAuthMethodSchema)),
    threeDsReqPriorAuthTimestamp: s.optional(s.string()),
    threeDsReqPriorRef: s.optional(s.string()),
    _keysMap: {
      threeDsReqPriorAuthData: "threeDSReqPriorAuthData",
      threeDsReqPriorAuthMethod: "threeDSReqPriorAuthMethod",
      threeDsReqPriorAuthTimestamp: "threeDSReqPriorAuthTimestamp",
      threeDsReqPriorRef: "threeDSReqPriorRef",
    },
  });

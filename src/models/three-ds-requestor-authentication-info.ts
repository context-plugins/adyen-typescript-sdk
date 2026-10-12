import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDsReqAuthMethodSchema, type ThreeDsReqAuthMethod } from "./three-ds-req-auth-method.js";

/**
 * Information about how the 3DS Requestor authenticated the cardholder before or during the
 * transaction
 */
export type ThreeDsRequestorAuthenticationInfo = {
  /**
   * Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.
   */
  threeDsReqAuthData?: string;
  /**
   * Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:
   * * **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as
   *   guest).
   * * **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s
   *   own credentials.
   * * **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.
   * * **04** — Login to the cardholder account at the 3DS Requestor system using issuer
   *   credentials.
   * * **05** — Login to the cardholder account at the 3DS Requestor system using third-party
   *   authentication.
   * * **06** — Login to the cardholder account at the 3DS Requestor system using FIDO
   *   Authenticator.
   */
  threeDsReqAuthMethod?: ThreeDsReqAuthMethod;
  /** Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM */
  threeDsReqAuthTimestamp?: string;
};

export const threeDsRequestorAuthenticationInfoSchema: Schema<ThreeDsRequestorAuthenticationInfo> =
  s.object<ThreeDsRequestorAuthenticationInfo>({
    threeDsReqAuthData: s.optional(s.string()),
    threeDsReqAuthMethod: s.optional(s.lazy(() => threeDsReqAuthMethodSchema)),
    threeDsReqAuthTimestamp: s.optional(s.string()),
    _keysMap: {
      threeDsReqAuthData: "threeDSReqAuthData",
      threeDsReqAuthMethod: "threeDSReqAuthMethod",
      threeDsReqAuthTimestamp: "threeDSReqAuthTimestamp",
    },
  });

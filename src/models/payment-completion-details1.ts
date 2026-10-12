import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Use this collection to submit the details that were returned as a result of the `/payments` call.
 */
export type PaymentCompletionDetails1 = {
  /** A payment session identifier returned by the card issuer. */
  md?: string;
  /** (3D) Payment Authentication Request data for the card issuer. */
  paReq?: string;
  /** (3D) Payment Authentication Response data by the card issuer. */
  paRes?: string;
  authorizationToken?: string;
  /** PayPal-generated token for recurring payments. */
  billingToken?: string;
  /** The SMS verification code collected from the shopper. */
  cupsecureplusSmscode?: string;
  /** PayPal-generated third party access token. */
  facilitatorAccessToken?: string;
  /** A random number sent to the mobile phone number of the shopper to verify the payment. */
  oneTimePasscode?: string;
  /** PayPal-assigned ID for the order. */
  orderId?: string;
  /** PayPal-assigned ID for the payer (shopper). */
  payerId?: string;
  /** Payload appended to the `returnURL` as a result of the redirect. */
  payload?: string;
  /** PayPal-generated ID for the payment. */
  paymentId?: string;
  /**
   * Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible
   * values: any value starting with `requestPayment:`.
   */
  paymentStatus?: string;
  /** The result of the redirect as appended to the `returnURL`. */
  redirectResult?: string;
  /** Value you received from the WeChat Pay SDK. */
  resultCode?: string;
  /** The query string as appended to the `returnURL` when using direct issuer links . */
  returnUrlQueryString?: string;
  /**
   * Base64-encoded string returned by the Component after the challenge flow. It contains the
   * following parameters: `transStatus`, `authorisationToken`.
   */
  threeDsResult?: string;
  /**
   * Base64-encoded string returned by the Component after the challenge flow. It contains the
   * following parameter: `transStatus`.
   */
  threeds2ChallengeResult?: string;
  /**
   * Base64-encoded string returned by the Component after the challenge flow. It contains the
   * following parameter: `threeDSCompInd`.
   */
  threeds2Fingerprint?: string;
  /** PayPalv2-generated token for recurring payments. */
  vaultToken?: string;
};

export const paymentCompletionDetails1Schema: Schema<PaymentCompletionDetails1> =
  s.object<PaymentCompletionDetails1>({
    md: s.optional(s.string()),
    paReq: s.optional(s.string()),
    paRes: s.optional(s.string()),
    authorizationToken: s.optional(s.string()),
    billingToken: s.optional(s.string()),
    cupsecureplusSmscode: s.optional(s.string()),
    facilitatorAccessToken: s.optional(s.string()),
    oneTimePasscode: s.optional(s.string()),
    orderId: s.optional(s.string()),
    payerId: s.optional(s.string()),
    payload: s.optional(s.string()),
    paymentId: s.optional(s.string()),
    paymentStatus: s.optional(s.string()),
    redirectResult: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    returnUrlQueryString: s.optional(s.string()),
    threeDsResult: s.optional(s.string()),
    threeds2ChallengeResult: s.optional(s.string()),
    threeds2Fingerprint: s.optional(s.string()),
    vaultToken: s.optional(s.string()),
    _keysMap: {
      md: "MD",
      paReq: "PaReq",
      paRes: "PaRes",
      authorizationToken: "authorization_token",
      cupsecureplusSmscode: "cupsecureplus.smscode",
      orderId: "orderID",
      payerId: "payerID",
      paymentId: "paymentID",
      threeDsResult: "threeDSResult",
      threeds2ChallengeResult: "threeds2.challengeResult",
      threeds2Fingerprint: "threeds2.fingerprint",
    },
  });

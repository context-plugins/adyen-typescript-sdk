import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentCompletionDetails1 = {
  md?: string;
  paReq?: string;
  paRes?: string;
  authorizationToken?: string;
  billingToken?: string;
  cupsecureplusSmscode?: string;
  facilitatorAccessToken?: string;
  oneTimePasscode?: string;
  orderId?: string;
  payerId?: string;
  payload?: string;
  paymentId?: string;
  paymentStatus?: string;
  redirectResult?: string;
  resultCode?: string;
  returnUrlQueryString?: string;
  threeDsResult?: string;
  threeds2ChallengeResult?: string;
  threeds2Fingerprint?: string;
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

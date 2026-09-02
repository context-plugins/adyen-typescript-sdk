import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acctInfoSchema, type AcctInfo } from "./acct-info.js";
import { acctTypeSchema, type AcctType } from "./acct-type.js";
import { addrMatchSchema, type AddrMatch } from "./addr-match.js";
import { challengeIndicatorSchema, type ChallengeIndicator } from "./challenge-indicator.js";
import { deviceRenderOptionsSchema, type DeviceRenderOptions } from "./device-render-options.js";
import { phoneSchema, type Phone } from "./phone.js";
import { sdkEphemPubKeySchema, type SdkEphemPubKey } from "./sdk-ephem-pub-key.js";
import { threeDsReqAuthMethodSchema, type ThreeDsReqAuthMethod } from "./three-ds-req-auth-method.js";
import {
  threeDsRequestorAuthenticationInfoSchema,
  type ThreeDsRequestorAuthenticationInfo,
} from "./three-ds-requestor-authentication-info.js";
import {
  threeDsRequestorPriorAuthenticationInfoSchema,
  type ThreeDsRequestorPriorAuthenticationInfo,
} from "./three-ds-requestor-prior-authentication-info.js";
import { transTypeSchema, type TransType } from "./trans-type.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

export type ThreeDs2RequestData11 = {
  acctInfo?: AcctInfo;
  acctType?: AcctType;
  acquirerBin?: string;
  acquirerMerchantId?: string;
  addrMatch?: AddrMatch;
  authenticationOnly?: boolean;
  challengeIndicator?: ChallengeIndicator;
  deviceChannel: string;
  deviceRenderOptions?: DeviceRenderOptions;
  homePhone?: Phone;
  mcc?: string;
  merchantName?: string;
  messageVersion?: string;
  mobilePhone?: Phone;
  notificationUrl?: string;
  payTokenInd?: boolean;
  paymentAuthenticationUseCase?: string;
  purchaseInstalData?: string;
  recurringExpiry?: string;
  recurringFrequency?: string;
  sdkAppId?: string;
  sdkEncData?: string;
  sdkEphemPubKey?: SdkEphemPubKey;
  sdkMaxTimeout?: number;
  sdkReferenceNumber?: string;
  sdkTransId?: string;
  sdkVersion?: string;
  threeDsCompInd?: string;
  threeDsRequestorAuthenticationInd?: string;
  threeDsRequestorAuthenticationInfo?: ThreeDsRequestorAuthenticationInfo;
  threeDsRequestorChallengeInd?: ThreeDsReqAuthMethod;
  threeDsRequestorId?: string;
  threeDsRequestorName?: string;
  threeDsRequestorPriorAuthenticationInfo?: ThreeDsRequestorPriorAuthenticationInfo;
  threeDsRequestorUrl?: string;
  transType?: TransType;
  transactionType?: TransactionType;
  whiteListStatus?: string;
  workPhone?: Phone;
};

export const threeDs2RequestData11Schema: Schema<ThreeDs2RequestData11> = s.object<ThreeDs2RequestData11>({
  acctInfo: s.optional(s.lazy(() => acctInfoSchema)),
  acctType: s.optional(s.lazy(() => acctTypeSchema)),
  acquirerBin: s.optional(s.string()),
  acquirerMerchantId: s.optional(s.string()),
  addrMatch: s.optional(s.lazy(() => addrMatchSchema)),
  authenticationOnly: s.optional(s.boolean()),
  challengeIndicator: s.optional(s.lazy(() => challengeIndicatorSchema)),
  deviceChannel: s.string(),
  deviceRenderOptions: s.optional(s.lazy(() => deviceRenderOptionsSchema)),
  homePhone: s.optional(s.lazy(() => phoneSchema)),
  mcc: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  messageVersion: s.optional(s.string()),
  mobilePhone: s.optional(s.lazy(() => phoneSchema)),
  notificationUrl: s.optional(s.string()),
  payTokenInd: s.optional(s.boolean()),
  paymentAuthenticationUseCase: s.optional(s.string()),
  purchaseInstalData: s.optional(s.string()),
  recurringExpiry: s.optional(s.string()),
  recurringFrequency: s.optional(s.string()),
  sdkAppId: s.optional(s.string()),
  sdkEncData: s.optional(s.string()),
  sdkEphemPubKey: s.optional(s.lazy(() => sdkEphemPubKeySchema)),
  sdkMaxTimeout: s.optional(s.number()),
  sdkReferenceNumber: s.optional(s.string()),
  sdkTransId: s.optional(s.string()),
  sdkVersion: s.optional(s.string()),
  threeDsCompInd: s.optional(s.string()),
  threeDsRequestorAuthenticationInd: s.optional(s.string()),
  threeDsRequestorAuthenticationInfo: s.optional(s.lazy(() => threeDsRequestorAuthenticationInfoSchema)),
  threeDsRequestorChallengeInd: s.optional(s.lazy(() => threeDsReqAuthMethodSchema)),
  threeDsRequestorId: s.optional(s.string()),
  threeDsRequestorName: s.optional(s.string()),
  threeDsRequestorPriorAuthenticationInfo: s.optional(
    s.lazy(() => threeDsRequestorPriorAuthenticationInfoSchema),
  ),
  threeDsRequestorUrl: s.optional(s.string()),
  transType: s.optional(s.lazy(() => transTypeSchema)),
  transactionType: s.optional(s.lazy(() => transactionTypeSchema)),
  whiteListStatus: s.optional(s.string()),
  workPhone: s.optional(s.lazy(() => phoneSchema)),
  _keysMap: {
    acquirerBin: "acquirerBIN",
    acquirerMerchantId: "acquirerMerchantID",
    notificationUrl: "notificationURL",
    sdkAppId: "sdkAppID",
    sdkTransId: "sdkTransID",
    threeDsCompInd: "threeDSCompInd",
    threeDsRequestorAuthenticationInd: "threeDSRequestorAuthenticationInd",
    threeDsRequestorAuthenticationInfo: "threeDSRequestorAuthenticationInfo",
    threeDsRequestorChallengeInd: "threeDSRequestorChallengeInd",
    threeDsRequestorId: "threeDSRequestorID",
    threeDsRequestorName: "threeDSRequestorName",
    threeDsRequestorPriorAuthenticationInfo: "threeDSRequestorPriorAuthenticationInfo",
    threeDsRequestorUrl: "threeDSRequestorURL",
  },
});

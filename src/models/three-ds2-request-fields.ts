import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acctInfoSchema, type AcctInfo } from "./acct-info.js";
import { acctTypeSchema, type AcctType } from "./acct-type.js";
import { addrMatch1Schema, type AddrMatch1 } from "./addr-match1.js";
import { challengeIndicatorSchema, type ChallengeIndicator } from "./challenge-indicator.js";
import { deviceRenderOptionsSchema, type DeviceRenderOptions } from "./device-render-options.js";
import { phone1Schema, type Phone1 } from "./phone1.js";
import { phone2Schema, type Phone2 } from "./phone2.js";
import { phone3Schema, type Phone3 } from "./phone3.js";
import { sdkEphemPubKey1Schema, type SdkEphemPubKey1 } from "./sdk-ephem-pub-key1.js";
import {
  threeDsRequestorAuthenticationInfoSchema,
  type ThreeDsRequestorAuthenticationInfo,
} from "./three-ds-requestor-authentication-info.js";
import {
  threeDsRequestorChallengeIndSchema,
  type ThreeDsRequestorChallengeInd,
} from "./three-ds-requestor-challenge-ind.js";
import {
  threeDsRequestorPriorAuthenticationInfoSchema,
  type ThreeDsRequestorPriorAuthenticationInfo,
} from "./three-ds-requestor-prior-authentication-info.js";
import { transTypeSchema, type TransType } from "./trans-type.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

export type ThreeDs2RequestFields = {
  acctInfo?: AcctInfo;
  acctType?: AcctType;
  acquirerBin?: string;
  acquirerMerchantId?: string;
  addrMatch?: AddrMatch1;
  authenticationOnly?: boolean;
  challengeIndicator?: ChallengeIndicator;
  deviceRenderOptions?: DeviceRenderOptions;
  homePhone?: Phone3;
  mcc?: string;
  merchantName?: string;
  messageVersion?: string;
  mobilePhone?: Phone1;
  notificationUrl?: string;
  payTokenInd?: boolean;
  paymentAuthenticationUseCase?: string;
  purchaseInstalData?: string;
  recurringExpiry?: string;
  recurringFrequency?: string;
  sdkAppId?: string;
  sdkEphemPubKey?: SdkEphemPubKey1;
  sdkMaxTimeout?: number;
  sdkReferenceNumber?: string;
  sdkTransId?: string;
  threeDsCompInd?: string;
  threeDsRequestorAuthenticationInd?: string;
  threeDsRequestorAuthenticationInfo?: ThreeDsRequestorAuthenticationInfo;
  threeDsRequestorChallengeInd?: ThreeDsRequestorChallengeInd;
  threeDsRequestorId?: string;
  threeDsRequestorName?: string;
  threeDsRequestorPriorAuthenticationInfo?: ThreeDsRequestorPriorAuthenticationInfo;
  threeDsRequestorUrl?: string;
  transType?: TransType;
  transactionType?: TransactionType;
  whiteListStatus?: string;
  workPhone?: Phone2;
};

export const threeDs2RequestFieldsSchema: Schema<ThreeDs2RequestFields> = s.object<ThreeDs2RequestFields>({
  acctInfo: s.optional(s.lazy(() => acctInfoSchema)),
  acctType: s.optional(s.lazy(() => acctTypeSchema)),
  acquirerBin: s.optional(s.string()),
  acquirerMerchantId: s.optional(s.string()),
  addrMatch: s.optional(s.lazy(() => addrMatch1Schema)),
  authenticationOnly: s.optional(s.boolean()),
  challengeIndicator: s.optional(s.lazy(() => challengeIndicatorSchema)),
  deviceRenderOptions: s.optional(s.lazy(() => deviceRenderOptionsSchema)),
  homePhone: s.optional(s.lazy(() => phone3Schema)),
  mcc: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  messageVersion: s.optional(s.string()),
  mobilePhone: s.optional(s.lazy(() => phone1Schema)),
  notificationUrl: s.optional(s.string()),
  payTokenInd: s.optional(s.boolean()),
  paymentAuthenticationUseCase: s.optional(s.string()),
  purchaseInstalData: s.optional(s.string()),
  recurringExpiry: s.optional(s.string()),
  recurringFrequency: s.optional(s.string()),
  sdkAppId: s.optional(s.string()),
  sdkEphemPubKey: s.optional(s.lazy(() => sdkEphemPubKey1Schema)),
  sdkMaxTimeout: s.optional(s.number()),
  sdkReferenceNumber: s.optional(s.string()),
  sdkTransId: s.optional(s.string()),
  threeDsCompInd: s.optional(s.string()),
  threeDsRequestorAuthenticationInd: s.optional(s.string()),
  threeDsRequestorAuthenticationInfo: s.optional(s.lazy(() => threeDsRequestorAuthenticationInfoSchema)),
  threeDsRequestorChallengeInd: s.optional(s.lazy(() => threeDsRequestorChallengeIndSchema)),
  threeDsRequestorId: s.optional(s.string()),
  threeDsRequestorName: s.optional(s.string()),
  threeDsRequestorPriorAuthenticationInfo: s.optional(
    s.lazy(() => threeDsRequestorPriorAuthenticationInfoSchema),
  ),
  threeDsRequestorUrl: s.optional(s.string()),
  transType: s.optional(s.lazy(() => transTypeSchema)),
  transactionType: s.optional(s.lazy(() => transactionTypeSchema)),
  whiteListStatus: s.optional(s.string()),
  workPhone: s.optional(s.lazy(() => phone2Schema)),
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

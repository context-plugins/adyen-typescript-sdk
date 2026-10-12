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

/**
 * Request fields for 3D Secure 2. To check if any of the following fields are required for your
 * integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic
 * integration](https://docs.adyen.com/classic-integration) documentation.
 */
export type ThreeDs2RequestFields1 = {
  /** Additional information about the cardholder’s account provided by the 3DS Requestor. */
  acctInfo?: AcctInfo;
  /**
   * Indicates the type of account. For example, for a multi-account card product. Length: 2
   * characters. Allowed values:
   * * **01** — Not applicable
   * * **02** — Credit
   * * **03** — Debit
   */
  acctType?: AcctType;
  /**
   * Required for [authentication-only
   * integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will
   * use in the authorisation. Use 123456 on the Test platform.
   */
  acquirerBin?: string;
  /**
   * Required for [authentication-only
   * integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should
   * match the value that you will use in the authorisation. Use 123456 on the Test platform.
   */
  acquirerMerchantId?: string;
  /**
   * Indicates whether the cardholder shipping Address and cardholder billing address are the same.
   * Allowed values:
   * * **Y** — Shipping Address matches Billing Address.
   * * **N** — Shipping Address does not match Billing Address.
   */
  addrMatch?: AddrMatch1;
  /**
   * If set to true, you will only perform the [3D Secure 2
   * authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only),
   * and not the payment authorisation.
   *
   * @deprecated
   *
   * @default false
   */
  authenticationOnly?: boolean;
  /**
   * Possibility to specify a preference for receiving a challenge from the issuer. Allowed values:
   * * `noPreference`
   * * `requestNoChallenge`
   * * `requestChallenge`
   * * `requestChallengeAsMandate`
   *
   * @deprecated
   */
  challengeIndicator?: ChallengeIndicator;
  /** Display options for the 3D Secure 2 SDK. Optional and only for `deviceChannel` **app**. */
  deviceRenderOptions?: DeviceRenderOptions;
  /**
   * The home phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  homePhone?: Phone3;
  /**
   * Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen,
   * mostly [authentication-only
   * integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is
   * registered at the scheme.
   */
  mcc?: string;
  /**
   * Required for [authentication-only
   * integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * The merchant name that the issuer presents to the shopper if they get a challenge. We recommend
   * to use the same value that you will use in the authorization. Maximum length is 40 characters.
   * > Optional for a [full 3D Secure 2
   * integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use
   * this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name
   * already configured on your account.
   */
  merchantName?: string;
  /** The `messageVersion` value indicating the 3D Secure 2 protocol version. */
  messageVersion?: string;
  /**
   * The mobile phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  mobilePhone?: Phone1;
  /**
   * URL to where the issuer should send the `CRes`. Required if you are not using components for
   * `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.
   */
  notificationUrl?: string;
  /**
   * Value **true** indicates that the transaction was de-tokenised prior to being received by the
   * ACS.
   */
  payTokenInd?: boolean;
  /** Indicates the type of payment for which an authentication is requested (message extension) */
  paymentAuthenticationUseCase?: string;
  /**
   * Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3
   * characters.
   */
  purchaseInstalData?: string;
  /** Date after which no further authorisations shall be performed. Format: YYYYMMDD */
  recurringExpiry?: string;
  /** Indicates the minimum number of days between authorisations. Maximum length: 4 characters. */
  recurringFrequency?: string;
  /** The `sdkAppID` value as received from the 3D Secure 2 SDK. */
  sdkAppId?: string;
  /** The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK. */
  sdkEphemPubKey?: SdkEphemPubKey1;
  /**
   * The maximum amount of time in minutes for the 3D Secure 2 authentication process. Optional and
   * only for `deviceChannel` set to **app**. Defaults to **60** minutes.
   *
   * @default 60
   */
  sdkMaxTimeout?: number;
  /** The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK. */
  sdkReferenceNumber?: string;
  /** The `sdkTransID` value as received from the 3D Secure 2 SDK. */
  sdkTransId?: string;
  /** Completion indicator for the device fingerprinting. */
  threeDsCompInd?: string;
  /** Indicates the type of Authentication request. */
  threeDsRequestorAuthenticationInd?: string;
  /**
   * Information about how the 3DS Requestor authenticated the cardholder before or during the
   * transaction
   */
  threeDsRequestorAuthenticationInfo?: ThreeDsRequestorAuthenticationInfo;
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
  /**
   * Required for [authentication-only
   * integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only)
   * for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol
   * for 3D Secure 2.
   */
  threeDsRequestorId?: string;
  /**
   * Required for [authentication-only
   * integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only)
   * for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for
   * 3D Secure 2.
   */
  threeDsRequestorName?: string;
  /**
   * Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS
   * transaction.
   */
  threeDsRequestorPriorAuthenticationInfo?: ThreeDsRequestorPriorAuthenticationInfo;
  /**
   * URL of the (customer service) website that will be shown to the shopper in case of technical
   * errors during the 3D Secure 2 process.
   */
  threeDsRequestorUrl?: string;
  /**
   * Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:
   * * **01** — Goods/Service Purchase
   * * **03** — Check Acceptance
   * * **10** — Account Funding
   * * **11** — Quasi-Cash Transaction
   * * **28** — Prepaid Activation and Load
   */
  transType?: TransType;
  /** Identify the type of the transaction being authenticated. */
  transactionType?: TransactionType;
  /**
   * The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable
   * for 3D Secure 2 protocol version 2.2.0.
   */
  whiteListStatus?: string;
  /**
   * The work phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  workPhone?: Phone2;
};

export const threeDs2RequestFields1Schema: Schema<ThreeDs2RequestFields1> = s.object<ThreeDs2RequestFields1>({
  acctInfo: s.optional(s.lazy(() => acctInfoSchema)),
  acctType: s.optional(s.lazy(() => acctTypeSchema)),
  acquirerBin: s.optional(s.string()),
  acquirerMerchantId: s.optional(s.string()),
  addrMatch: s.optional(s.lazy(() => addrMatch1Schema)),
  authenticationOnly: s.defaulted(s.boolean(), false),
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
  sdkMaxTimeout: s.defaulted(s.int(), 60),
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


# Three Ds 2 Request Data 2

Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2RequestData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acctInfo` | [`AcctInfo1 \| undefined`](../../doc/models/acct-info-1.md) | Optional | - |
| `acctType` | [`AcctType \| undefined`](../../doc/models/acct-type.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `acquirerBin` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform. |
| `acquirerMerchantId` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform. |
| `addrMatch` | [`AddrMatch \| undefined`](../../doc/models/addr-match.md) | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `authenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br><br>**Default**: `false` |
| `challengeIndicator` | [`ChallengeIndicator \| undefined`](../../doc/models/challenge-indicator.md) | Optional | - |
| `deviceChannel` | `string` | Required | The environment of the shopper.<br>Allowed values:<br><br>* `app`<br>* `browser` |
| `deviceRenderOptions` | [`DeviceRenderOptions2 \| undefined`](../../doc/models/device-render-options-2.md) | Optional | - |
| `homePhone` | [`HomePhone \| undefined`](../../doc/models/home-phone.md) | Optional | - |
| `mcc` | `string \| undefined` | Optional | Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme. |
| `merchantName` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.<br><br>> Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account. |
| `messageVersion` | `string \| undefined` | Optional | The `messageVersion` value indicating the 3D Secure 2 protocol version. |
| `mobilePhone` | [`MobilePhone \| undefined`](../../doc/models/mobile-phone.md) | Optional | - |
| `notificationUrl` | `string \| undefined` | Optional | URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**. |
| `payTokenInd` | `boolean \| undefined` | Optional | Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS. |
| `paymentAuthenticationUseCase` | `string \| undefined` | Optional | Indicates the type of payment for which an authentication is requested (message extension) |
| `purchaseInstalData` | `string \| undefined` | Optional | Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Format: YYYYMMDD |
| `recurringFrequency` | `string \| undefined` | Optional | Indicates the minimum number of days between authorisations. Maximum length: 4 characters.<br><br>**Constraints**: *Maximum Length*: `4` |
| `sdkAppId` | `string \| undefined` | Optional | The `sdkAppID` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**. |
| `sdkEncData` | `string \| undefined` | Optional | The `sdkEncData` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**. |
| `sdkEphemPubKey` | [`SdkEphemPubKey3 \| undefined`](../../doc/models/sdk-ephem-pub-key-3.md) | Optional | - |
| `sdkMaxTimeout` | `number \| undefined` | Optional | The maximum amount of time in minutes for the 3D Secure 2 authentication process.<br>Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.<br><br>**Default**: `60` |
| `sdkReferenceNumber` | `string \| undefined` | Optional | The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**. |
| `sdkTransId` | `string \| undefined` | Optional | The `sdkTransID` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**. |
| `sdkVersion` | `string \| undefined` | Optional | Version of the 3D Secure 2 mobile SDK.<br>Only for `deviceChannel` set to **app**. |
| `threeDsCompInd` | `string \| undefined` | Optional | Completion indicator for the device fingerprinting. |
| `threeDsRequestorAuthenticationInd` | `string \| undefined` | Optional | Indicates the type of Authentication request. |
| `threeDsRequestorAuthenticationInfo` | [`ThreeDsRequestorAuthenticationInfo1 \| undefined`](../../doc/models/three-ds-requestor-authentication-info-1.md) | Optional | - |
| `threeDsRequestorChallengeInd` | [`ThreeDsRequestorChallengeInd \| undefined`](../../doc/models/three-ds-requestor-challenge-ind.md) | Optional | - |
| `threeDsRequestorId` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2. |
| `threeDsRequestorName` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2. |
| `threeDsRequestorPriorAuthenticationInfo` | [`ThreeDsRequestorPriorAuthenticationInfo1 \| undefined`](../../doc/models/three-ds-requestor-prior-authentication-info-1.md) | Optional | - |
| `threeDsRequestorUrl` | `string \| undefined` | Optional | URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process. |
| `transType` | [`TransType \| undefined`](../../doc/models/trans-type.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `transactionType` | [`TransactionType \| undefined`](../../doc/models/transaction-type.md) | Optional | - |
| `whiteListStatus` | `string \| undefined` | Optional | The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0. |
| `workPhone` | [`WorkPhone \| undefined`](../../doc/models/work-phone.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AcctType,
  AddrMatch,
  ChAccAgeInd,
  ChAccChangeInd,
  ChAccPwChangeInd,
  ThreeDs2RequestData2,
} from 'adyen';

const threeDs2RequestData2: ThreeDs2RequestData2 = {
  deviceChannel: 'deviceChannel4',
  acctInfo: {
    chAccAgeInd: ChAccAgeInd.Enum05,
    chAccChange: 'chAccChange8',
    chAccChangeInd: ChAccChangeInd.Enum01,
    chAccPwChange: 'chAccPwChange8',
    chAccPwChangeInd: ChAccPwChangeInd.Enum03,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  acctType: AcctType.Enum02,
  acquirerBin: 'acquirerBIN2',
  acquirerMerchantId: 'acquirerMerchantID0',
  addrMatch: AddrMatch.Y,
  authenticationOnly: false,
  sdkMaxTimeout: 60,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


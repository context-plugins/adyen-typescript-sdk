
# Three DS Requestor Authentication Info

Information about how the 3DS Requestor authenticated the cardholder before or during the transaction

## Structure

`ThreeDSRequestorAuthenticationInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDSReqAuthData` | `string \| undefined` | Optional | Data that documents and supports a specific authentication process. Maximum length: 2048 bytes. |
| `threeDSReqAuthMethod` | [`ThreeDSReqAuthMethodEnum \| undefined`](../../doc/models/three-ds-req-auth-method-enum.md) | Optional | Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:<br><br>* **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest).<br>* **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials.<br>* **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.<br>* **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials.<br>* **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication.<br>* **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `threeDSReqAuthTimestamp` | `string \| undefined` | Optional | Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |

## Example

```ts
import {
  ThreeDSReqAuthMethodEnum,
  ThreeDSRequestorAuthenticationInfo,
} from 'adyen';

const threeDSRequestorAuthenticationInfo: ThreeDSRequestorAuthenticationInfo = {
  threeDSReqAuthData: 'threeDSReqAuthData8',
  threeDSReqAuthMethod: ThreeDSReqAuthMethodEnum.Enum01,
  threeDSReqAuthTimestamp: 'threeDSReqAuthTimestamp0',
};
```

